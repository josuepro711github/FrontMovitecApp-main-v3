import { Component, OnInit } from '@angular/core';
import { PostContactDTO } from '../../Models/contact.model';
import { ContactoService } from 'src/app/Services/contacto.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContacto!: FormGroup;
  private namePattern: any =
    /^([A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ]((\s)?[A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ])?)+$/; //solo letras
  private numeroPattern: any = /^\d+((.)?\d{1,2})?$/; //solo números
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo
  siteKey: string = "6LfFCdsgAAAAABIOTCS94LPa0_H8OuGf4QvJnzGc";  
  contacto : PostContactDTO = {
    nombre : "",
    apellidos : "",
    documento :"DNI",
    numero_documento : "",
    correo :"",
    telefono :"",
    mensaje :""
  };

  constructor(
    private contactoService : ContactoService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formContacto = this.fb.group({
      nombre: [
        null, 
        [
          Validators.required,
          Validators.pattern(this.namePattern)
        ]
      ],
      apellido: [
        null, 
        [
          Validators.required,
          Validators.pattern(this.namePattern)
        ]
      ],
      documento: [null, Validators.required],
      numeroDoc: [
        null, 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.numeroPattern)
        ]
      ],
      correo: [
        null,
        [
          Validators.required,
          Validators.pattern(this.correoPattern)
        ]
      ],
      celular: [
        null, 
        [
          Validators.required,
          Validators.minLength(9),
          Validators.pattern(this.numeroPattern),
        ]
      ],
      mensaje: [null, Validators.required],
      condiciones: [null, Validators.requiredTrue],
      recaptcha: [null, Validators.required],
    });
  }

  onSubmit(){
    if(!this.formContacto.valid){
      Swal({
        title: 'Formulario invalido',
        text: `Complete los datos por favor`,
        type: 'error',
        confirmButtonColor: '#E02D18',
        confirmButtonText: 'OK'
      })
      console.log("FORMULARIO INVALIDADO");
    }
    else{
      this.contactoService.create(this.contacto).subscribe(data => {
        this.enviarContacto(true);
      },err => {
        this.enviarContacto(false);
      });
      this.router.navigate(['/public/home']);
      Swal('Contacto ', `Contacto guardado correctamente!`, 'success')
    }
    
  }

  async enviarContacto(check:boolean){
    if (check){
      this.contacto.nombre="";
      this.contacto.apellidos="";
      this.contacto.documento="DNI";
      this.contacto.numero_documento="";
      this.contacto.telefono="";
      this.contacto.mensaje="";
      this.contacto.correo="";
    }
    await new Promise(f => setTimeout(f, 2000));
  }
}
