import { Routes                   } from '@angular/router';
import { HomeComponent            } from './home/home.component';
import { LoginComponent           } from './login/login.component';
import { FormHostComponent        } from './form-host/form-host.component';
import { FormExchangeComponent    } from './form-exchange/form-exchange.component';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { MapComponent             } from './map/map.component';
import { PerfilComponent          } from './perfil/perfil.component';
import { ExchangeComponent        } from './exchange/exchange.component';

export const routes: Routes = [
    { path: 'home'                  , component: HomeComponent            }
  , { path: 'login'                 , component: LoginComponent           }
  , { path: 'tornar-host'           , component: FormHostComponent        }
  , { path: 'cadastrar-intercambio' , component: FormExchangeComponent    }
  , { path: 'perfil'                , component: PerfilComponent          }
  , { path: 'intercambios'          , component: ExchangeComponent        }
  , { path: 'mapa'                  , component: MapComponent             }
  , { path: 'intercambio'           , component: ExchangeDetailsComponent }
  , { path: ''  , redirectTo: 'home', pathMatch: 'full'                   }
  , { path: '**', redirectTo: 'home'                                      }
];
