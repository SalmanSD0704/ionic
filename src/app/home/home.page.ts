import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js'
import { ActivatedRoute } from '@angular/router';

const supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private routes: ActivatedRoute) {
    /*   const user = this.routes.snapshot.paramMap.get('data');
      console.log(user); */
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
    })
  }

  /*  async loginWithGoogle(event: any) {
     // const { user, session, error } = await
     supabase.auth.signIn({
       provider: 'google'
     }).then((res) => {
       console.log(res);
       event.preventDefault();
 
     }).catch((err) => {
       console.log(err);
 
     });
 
 
   } */


}
