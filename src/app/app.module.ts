import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './shopping/recipes/recipe.module';
import { AuthenticateGuard } from './shopping/auth/auth-guard.service';
import { AuthenticateService } from './shopping/auth/auth.service';
import { DataStorageService } from './shopping/shared/data-storage.service';
import { ServerService } from './section18/http/server.service';
import { ShortenPipe } from './section17/pipes/shorten.pipe';
import { RecipeService } from './shopping/recipes/recipe.service';
import { ObsUsersService } from './section13/obs-users.service';
import { ServerResolver } from './section11/servers/server/server-resolver.service';
import { CanDeactivateGuard } from './section11/servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HeaderComponent } from './shopping/header/header.component';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';

import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';

import { CounterService } from './assignment5/shared/counter.service';
import { UsersService } from './assignment5/shared/users.service';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';


import { ServerComponent } from './section3/servers/server/server.component';
import { ServersComponent } from './section3/servers/servers.component';

import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';

import { BasicHighlightDirective } from './section7/basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './section7/unless/unless.directive';
import { DirectivesComponent } from './section7/directives/directives.component';
import { BetterHighlighterDirective } from './section7/better-highlighter/betterhighlighter.directive';

import { AccountComponent } from './section9/account/account.component';
import { NewAccountComponent } from './section9/new-account/new-account.component';
import { LoggingService } from './section9/shared/logging.service';
import { AccountsService } from './section9/shared/accounts.service';

import { HomeComponent } from './section11/home/home.component';
import { UsersComponent } from './section11/users/users.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { UserComponent } from './section11/users/user/user.component';
import { ServersRoutingComponent } from './section11/servers/servers.component';
import { ServerRoutingComponent } from './section11/servers/server/server.component';
import { PageNotFoundComponent } from './section11/page-not-found/page-not-found.component';
import { ServersService } from './section11/servers/servers.service';
import { ErrorPageComponent } from './section11/error-page/error-page.component';
import { ObservableHomeComponent } from './section13/observable-home/observable-home.component';
import { ObservableUserComponent } from './section13/observable-user/observable-user.component';
import { FormsComponent } from './section15/forms/forms.component';
import { TestformComponent } from './assignment6/testform/testform.component';
import { ReactiveComponent } from './section15/reactive/reactive.component';
import { ReactiveformComponent } from './assignment7/reactiveform/reactiveform.component';
import { PipesComponent } from './section17/pipes/pipes.component';
import { FilterPipe } from './section17/pipes/filter.pipe';
import { ReversePipe } from './section17/pipes/reverse.pipe';
import { SortPipe } from './section17/pipes/sort.pipe';
import { HttpComponent } from './section18/http/http.component';
import { SignupComponent } from './shopping/auth/signup/signup.component';
import { SigninComponent } from './shopping/auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    OddComponent,
    EvenComponent,
    Assignment4Component,
    GameControlComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    UnlessDirective,
    DirectivesComponent,
    BetterHighlighterDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    UserComponent,
    ServersRoutingComponent,
    ServerRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservableHomeComponent,
    ObservableUserComponent,
    FormsComponent,
    TestformComponent,
    ReactiveComponent,
    ReactiveformComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesModule,
    SharedModule
  ],
  providers: [
    AccountsService,
    LoggingService,
    UsersService,
    CounterService,
    ShoppingListService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver,
    ObsUsersService,
    RecipeService,
    ServerService,
    DataStorageService,
    AuthenticateService,
    AuthenticateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
