import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkService } from '../../services/work.service';
import { NotificationService } from '../../services/notification.service';
import { RatingService } from 'src/app/user/services/rating.service';
import { Rating } from 'src/app/user/models/rating';
import { saveAs } from 'file-saver'; 


@Component({
  selector: 'app-detail-lender-work',
  templateUrl: './detail-lender-work.component.html',
  styleUrls: ['./detail-lender-work.component.css']
})
export class DetailLenderWorkComponent implements OnInit {
  idWork
  information
  contract
  vigente

  userId
  workId
  lenderEmail
  state
 
  userData

   //Map
   zoom = 15
   map:any
   center: google.maps.LatLngLiteral
   markerPosition: google.maps.LatLngLiteral;
   @ViewChild('map') mapElement: ElementRef

   //rating
   message
   point = 0
   poinsOnetWork
   messagesUser

   //contract
   informacion: string = `
   <h3 style="text-align: center;">Contrato de prestación de servicio</h3>

    <p>En la ciudad de ___________, a ______ de ______________ del año 20__, las partes acuerdan y suscriben el presente
        contrato de prestación de servicio, el mismo que surtirá los efectos de ley a solo reconocimiento de firmas y
        rúbricas, bajo las siguientes cláusulas y condiciones:</p>

    <h4>CLÁUSULA PRIMERA: LAS PARTES</h4>

    <p>De una parte, ______________________________, mayor de edad, hábil por Ley, en adelante "EL PRESTADOR", de
        nacionalidad ____________, con cédula de identidad número __________ expedida en la ciudad de
        ___________________, de ocupación__________, con domicilio actual ubicado en
        ___________________________de la ciudad de Cochabamba</p>

    <p>Por otra parte, ______________________________, mayor de edad, hábil por Ley, en adelante "EL CLIENTE", de
        nacionalidad ____________, con cédula de identidad número __________ expedida en la ciudad de
        ___________________, de ocupación__________, con domicilio actual ubicado en
        ___________________________de la ciudad de Cochabamba</p>

    <h4>CLÁUSULA SEGUNDA: DEFINICIÓN DE SERVICIO</h4>

    <p>EL PRESTADOR se compromete a proporcionar los siguientes servicios a EL CLIENTE:</p>

    <p>[Descripción detallada del servicio a ser prestado]</p>

    <h4>CLÁUSULA TERCERA: PLAZOS</h4>

    <p>El presente contrato entrará en vigor a partir de la fecha de firma y tendrá una duración de _____ días/meses/años, a menos que sea terminado por mutuo acuerdo o por incumplimiento de alguna de las
        partes.</p>

    <h4>CLÁUSULA CUARTA: PAGO</h4>

    <p>EL CLIENTE se compromete a pagar a EL PRESTADOR la cantidad de __________ por el servicio prestado. El pago se
        realizará de la siguiente manera: [Descripción de la forma de pago y frecuencia].</p>

    <h4>CLÁUSULA QUINTA: RESPONSABILIDADES</h4>

    <p>EL PRESTADOR asume la responsabilidad de realizar el servicio de manera profesional, siguiendo los estándares de la
        industria y cumpliendo con todas las leyes y regulaciones aplicables.</p>

    <p>[Descripción de las responsabilidades específicas de EL PRESTADOR]</p>

    <p>EL CLIENTE se compromete a proporcionar al prestador toda la información y los recursos necesarios para llevar a
        cabo los servicios de manera efectiva.</p>

    <p>[Descripción de las responsabilidades específicas de EL CLIENTE]</p>

    <h4>CLÁUSULA SEXTA: CONFIDENCIALIDAD</h4>
    <p>Ambas partes acuerdan mantener la confidencialidad de toda la información y documentación proporcionada por cada
    una de ellas durante la prestación del servicio. Dicha información no podrá ser divulgada a terceros sin el consentimiento previo por escrito de la parte propietaria de la información. Esta obligación de confidencialidad se mantendrá incluso después de la terminación del presente contrato.</p>
   
    <h4>CLÁUSULA SÉPTIMA: OBLIGACIONES DE LAS PARTES</h4>

    <p>EL PRESTADOR se compromete a:</p>

    <ul>
    <li>Realizar los servicios de acuerdo con los estándares de calidad acordados.</li>
    <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
    <li>Informar al cliente sobre cualquier cambio o modificación que afecte la prestación de los servicios.</li>
    <p>[Enumerar las demás obligaciones específicas de EL PRESTADOR]</p>
    </ul>

    <p>EL CLIENTE se compromete a:</p>

    <ul>
    <li>Proporcionar al prestador toda la información y los recursos necesarios para la prestación de los servicios.</li>
    <li>Pagar al proveedor la cantidad acordada en la cláusula 4.</li>
    <p>[Enumerar las demás obligaciones específicas de EL CLIENTE]</p>
    </ul>

    <h4>CLÁUSULA OCTAVA: INCUMPLIMIENTOS</h4>

    <p>En caso de incumplimiento de alguna de las obligaciones establecidas en este contrato por cualquiera de las partes,
        la parte afectada deberá notificar por escrito a la otra parte, detallando la naturaleza del incumplimiento.</p>

    <p>Si EL PRESTADOR incumple sus obligaciones de manera sustancial y no subsana dicho incumplimiento en un plazo de _____
        días a partir de la notificación por escrito, EL CLIENTE tendrá derecho a rescindir el contrato y a exigir la
        indemnización por los daños y perjuicios sufridos como consecuencia del incumplimiento.</p>

    <p>Si EL CLIENTE incumple sus obligaciones de manera sustancial y no subsana dicho incumplimiento en un plazo de _____
        días a partir de la notificación por escrito, EL PRESTADOR tendrá derecho a suspender la prestación de los
        servicios hasta que se subsane el incumplimiento o a rescindir el contrato, así como a exigir la indemnización por
        los daños y perjuicios sufridos como consecuencia del incumplimiento.</p>

    <h4>CLÁUSULA NOVENA: GARANTÍAS</h4>

    <p>EL PRESTADOR garantiza que los servicios serán realizados por personal calificado y competente, y que se llevarán a
        cabo de acuerdo con los estándares de calidad establecidos en este contrato.</p>

    <p>EL CLIENTE reconoce que los servicios están sujetos a limitaciones inherentes y acepta que EL PROVEEDOR no otorga
        ninguna otra garantía expresa o implícita en relación con los servicios, salvo las establecidas en este
        contrato.</p>

    <h4>CLÁUSULA DÉCIMA: RESOLUCIÓN DE CONFLICTOS</h4>

    <p>Cualquier disputa o conflicto que surja en relación con este contrato será resuelto de la siguiente manera:</p>
    <p>a) Negociación: Las partes se comprometen a resolver cualquier desacuerdo mediante negociaciones de buena fe. Ambas partes deberán reunirse y tratar de llegar a un acuerdo mutuamente satisfactorio dentro de un plazo razonable.</p>
    <p>b) Mediación: Si las partes no logran resolver el conflicto a través de negociaciones directas, acuerdan someter el conflicto a un proceso de mediación. Designarán a un mediador neutral y de común acuerdo, cuyo costo será compartido por ambas partes. El mediador facilitará la comunicación entre las partes y les ayudará a encontrar una solución mutuamente aceptable.</p>
    <p>c) Arbitraje: Si las negociaciones y la mediación no resuelven el conflicto, las partes acuerdan someterse a un arbitraje vinculante. El arbitraje se llevará a cabo de acuerdo con las reglas y procedimientos de arbitraje [especificar el organismo de arbitraje] y se realizará en [ubicación]. El laudo arbitral será definitivo y obligatorio para ambas partes.</p>

    <h4>CLÁUSULA DÉCIMA PRIMERA: CONFORMIDAD</h4>

    <p>Las partes declaran que han leído, comprendido y aceptado todas las cláusulas y condiciones de este contrato.</p>

    <p>_________________________</p>
    <p>[Firma del Prestador]</p>

    <p>_________________________</p>
    <p>[Firma del Cliente] 

<p  style="text-align: center;">Cochabamba, ___ de _____________ del año 20___</p>
   `;


  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private notificationService: NotificationService,
    private ratingService: RatingService
    
  ) { }

  async ngOnInit() {
    let user = localStorage.getItem('token')
    this.userData = JSON.parse(user)
    this.route.queryParams.subscribe((params: Params) => {
      this.vigente = params['vigente'];
       
    });
    this.idWork = this.route.snapshot.paramMap.get('id')
    await this.informationLenderWork()
    await this.controlContracts()
    await this.ratingService.averagePointsForWork(this.idWork).subscribe(result => {
      this.poinsOnetWork = result;
    });
    await this.messagesFromUsers()

  }

  updateRating(event: any) {
    this.point = event.rating;
  }
  
  informationLenderWork(){
    this.workService.getWorkwithLender(this.idWork).subscribe(
      data => {
        this.information = data
        this.center = {
          lat: Number(this.information?.lat),
          lng: Number(this.information?.lng)
        };
        this.markerPosition = this.center;
      },
      err => {
        console.log(err)
      }
    )
  }

  sendRequest(){
    console.log(this.userData);
    
   let message = `El usuario ${this.userData.user.name} ${this.userData.user.lastName} requiere tu servicio de ${this.information.job}`
   const notificacion = { message: message, workId: this.idWork, userId: this.userData.user.id, lenderEmail: this.information.lender.email, state: 'pendiente'};
   this.notificationService.sendNotification(notificacion).subscribe()
  }

  controlContracts(){
    this.notificationService.listOneUserWithContracts(this.userData.user.id, this.idWork).subscribe(
      data => {
        this.contract = data
      },
      err => {
        console.log(err)
      }
    )
  }

  endContract(){
    this.notificationService.changeState(this.contract.id, 'terminado', `El trabajo finalizo`).subscribe(
      data => {
        this.contract = data
      },
      err => {
        console.log(err)
      }
    );

    let rating = new Rating(this.userData.user.id, this.information.id, this.point, this.message)
    this.ratingService.createRating(rating).subscribe(
      ()=>{
        this.ratingService.averagePointsForWork(this.idWork).subscribe(result => {
          this.poinsOnetWork = result;
        });
      }
    )
  }

  addRating(){
    let rating = new Rating(this.userData.user.id, this.information.id, this.point, this.message)
    this.ratingService.createRating(rating).subscribe()
  }

  messagesFromUsers(){
    this.ratingService.messagesForWork(this.idWork).subscribe(
      data => {
        this.messagesUser = data
      },
      err => {
        console.log(err)
      }
    )
  }
  

  descargar() {
    const contenido = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>Información Descargada</title>
        </head>
        <body>
          <div>${this.informacion}</div>
        </body>
      </html>`;

    const blob = new Blob(['\ufeff', contenido], {
      type: 'application/msword'
    });

    saveAs(blob, 'contrato-del-servicio.doc'); // Descarga el archivo con el nombre "informacion.doc"
  }


}
