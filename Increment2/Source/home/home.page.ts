import {Component, ViewChild} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {NavController} from "@ionic/angular";
import {AboutPage} from "../about/about.page";
import {TabsPage} from "../tabs/tabs.page";
import {DoctorsPage} from "../doctors/doctors.page";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    @ViewChild('username') uname;
    @ViewChild('password') password;

    constructor(private auth: AuthenticationService, private navCtrl: NavController) {
    }

    signIn() {
        console.log(this.uname.value, this.password.value);
        this.login();
    }

    login() {
        this.auth.login(this.uname.value, this.password.value)
            .then(response => {
                this.navCtrl.navigateRoot('/doctors');
                // this.navCtrl.navigateRoot("[{ outlets: { about: ['AboutPage'] } }]");
                //this.navCtrl.navigateRoot("/tabs/(about:about)");
            }, error => {
                console.log("Invalid credentials!");
            })
            .catch(error => {
                // handle error by showing alert
            })
    }
}
