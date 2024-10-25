import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent} from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { MovProdutoComponent } from './mov-produto/mov-produto.component';

const routes: Routes = [
  {path:'',redirectTo:'catalogo',pathMatch:'full'},
  {path:'catalogo',component:CatalogoComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'cadUsuario',component:CadUsuarioComponent},
  {path:'cadProduto',component:CadProdutoComponent},
  {path:'mov-produto', component:MovProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
