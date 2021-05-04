import { AlertifyService } from './../../services/alertify.service';
import { User } from './../../Model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  // Propriétés
  registrationForm: FormGroup;
  user : User;
  userSubmitted : boolean;


  constructor(private fb: FormBuilder,private userService: UserService,private alertifyService: AlertifyService) {

  }

  ngOnInit(): void {

    //Initialisation de la variable generale du formulaire FormGroup

  //   this.registrationForm = new FormGroup({
  //     nom : new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     motdepasse: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  //     cMotdepasse: new FormControl(null, [Validators.required]),
  //     telephone: new FormControl(null, [Validators.required, Validators.minLength(10)])
  //   }, this.passwordConfirmValidator);

        this.creerFormulaireInscription();


    }
    //Autre façon de creer la variable du formulaire
    creerFormulaireInscription(){
      this.registrationForm = this.fb.group({
        nom: [null, Validators.required],
        email: [null,  [Validators.required, Validators.email]],
        motdepasse: [null,  [Validators.required, Validators.minLength(8)]],
        cMotdepasse: [null,  [Validators.required]],
        telephone: [null, [Validators.required, Validators.minLength(10)]]
      }, {validators: this.passwordConfirmValidator});
    }

    // getters pour tous les FormControls
    get nom(){
      return this.registrationForm.get('nom') as FormControl;
    }
    get email(){
      return this.registrationForm.get('email') as FormControl;
    }
    get motdepasse(){
      return this.registrationForm.get('motdepasse') as FormControl;
    }
    get cMotdepasse(){
      return this.registrationForm.get('cMotdepasse') as FormControl;
    }
    get telephone(){
      return this.registrationForm.get('telephone') as FormControl;
    }

    // Validations
  passwordConfirmValidator(fg: FormGroup): Validators{
    return fg.get('motdepasse').value === fg.get('cMotdepasse').value ? null : {
      notmatched: true
    };
  }


  onSubmit(){
    console.log(this.registrationForm);

    this.userSubmitted = true;
    if(this.registrationForm.valid){
     // this.user = Object.assign(this.user, this.registrationForm.value);

      this.userService.addUser(this.donneesUtilisateur());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success("felicitation , vous êtes entregitré")
    }else{
      this.alertifyService.error("veuillez corriger les erreurs avant d'envoyer le formulaire");

    }
  }

  donneesUtilisateur() : User{
    return this.user = {
      nom : this.nom.value,
      email : this.email.value,
      motdepasse : this.motdepasse.value,
      telephone : this.telephone.value
    }
  }



}
