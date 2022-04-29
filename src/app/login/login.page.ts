import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, AuthUser } from '@supabase/supabase-js'
import { Router } from '@angular/router';

const supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo: any
  loginbtn: boolean = false
  constructor(private router: Router) {

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session.user.user_metadata);
      if (session?.user) {
        this.userInfo = session.user.user_metadata
        this.loginbtn = true
        //this.router.navigate(['/home']);
      }
    })
  }

  ngOnInit() {
  }
  // get user() {
  //   return this.supabase.auth.user();
  // }

  // get session() {
  //   return this.supabase.auth.session();
  // }

  // get profile() {
  //   return this.supabase
  //     .from('profiles')
  //     .select(`username, website, avatar_url`)
  //     .eq('id', this.user?.id)
  //     .single();
  // }


  async loginWithGoogle(event: any) {
    // const loader = await supabase.createLoader();
    // await loader.present();

    event.preventDefault();
    await supabase.auth.signIn({
      provider: 'google',
    },// {
    //   redirectTo: "/home"
    // }
    );

    // if (error) {
    //   console.log(error);
    // }


    // console.log();


    //  .then((res) => {
    //   console.log(res);
    //   event.preventDefault();



    // }).catch((err) => {
    //   console.log(err);

    // });


  }
}
