import {Component, HostBinding} from '@angular/core';  color = 'red';
  transition = 'all 1337ms ease';
  yesToApple = true;
  yesToTomato = false;  @HostBinding('style.border') border = '1px solid purple';  @HostBinding('class.orange') yesToOrange = true;
}
