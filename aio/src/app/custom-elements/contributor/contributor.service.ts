import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AsyncSubject, connectable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Contributor, ContributorGroup} from './contributors.model';

// TODO(andrewjs): Look into changing this so that we don't import the service just to get the const
import {CONTENT_URL_PREFIX} from 'app/documents/document.service';

const contributorsPath = CONTENT_URL_PREFIX + 'contributors.json';
const knownGroups = ['Angular', 'Collaborators', 'GDE'];

@Injectable()
export class ContributorService {
  contributors: Observable<ContributorGroup[]>;

  constructor(private http: HttpClient) {
    this.contributors = this.getContributors();
  }

  private getContributors() {
    const contributors = this.http.get<{[key: string]: Contributor}>(contributorsPath).pipe(
      // Create group map
      map((contribs) => {
        const contribMap: {[name: string]: Contributor[]} = {};
        Object.keys(contribs).forEach((key) => {
 const contributor = contribs[key];
 contributor.groups.forEach((group) => {
   const contribGroup = contribMap[group] || (contribMap[group] = []);
   contribGroup.push(contributor);
 });
        });

        return contribMap;
      }),

      // Flatten group map into sorted group array of sorted contributors
      map((cmap) =>
        Object.keys(cmap)
 .map((key) => {
   const order = knownGroups.indexOf(key);
   return {
     name: key,
     order: order === -1 ? knownGroups.length : order,
     contributors: cmap[key].sort(compareContributors),
   };
 })
 .sort(compareGroups)
      )
    );

    const connectableContributors = connectable(contributors, {
      connector: () => new AsyncSubject(),
      resetOnDisconnect: false,
    });
    connectableContributors.connect();
    return connectableContributors;
  }
}

function compareContributors(l: Contributor, r: Contributor) {
  return l.name.toUpperCase() > r.name.toUpperCase() ? 1 : -1;
}

function compareGroups(l: ContributorGroup, r: ContributorGroup) {
  return l.order === r.order ? (l.name > r.name ? 1 : -1) : l.order > r.order ? 1 : -1;
}
