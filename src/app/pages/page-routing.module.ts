import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMusicasComponent } from '../components/listado-musicas/listado-musicas.component';
import { PageComponent } from './page.component';

const routes: Routes = [ {path: '', component: PageComponent,
children:[
  {path: 'listado-musicas', component: ListadoMusicasComponent},
  { path: '', redirectTo: '/listado-musicas', pathMatch: 'full' },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
