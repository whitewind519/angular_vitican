import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetQuoteComponent } from "./get-quote/get-quote.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Vitican Partners" },
    pathMatch: "full"
  },
  {
    path: "get-quote",
    component: GetQuoteComponent,
    data: { title: "Vitican Partners - Get Quote" },
    pathMatch: "full"
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    data: { title: "Vitican Partners - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "Vitican Partners - About" },
    pathMatch: "full"
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Vitican Partners - Contact" },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
