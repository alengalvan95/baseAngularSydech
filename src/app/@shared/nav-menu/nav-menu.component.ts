import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from "../../../app/guards/AuthGuard";
import { GeneralComponent } from "../general/general.component";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/@services/auth.service";
import { LocalStorageService } from "src/app/@services/local-storage.service";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
  providers: [AuthGuard],
})
export class NavMenuComponent {



  constructor(
    private auth: AuthGuard,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {
  }




}
