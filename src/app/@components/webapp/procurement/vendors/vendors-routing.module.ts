import { NgModule } from "@angular/core";
import { VendorsComponent } from "./vendors.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: '', component: VendorsComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VendorsRoutingModule{

}