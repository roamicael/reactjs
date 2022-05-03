

const Form = () => { 

    return(
        <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" class="form-label">Nombre</label>
    <input typeName="text" className="form-control" id="validationCustom01"  required />
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="validationCustom02"  required />
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" class="form-label">Pais</label>
    <input type="text" className="form-control" id="validationCustom03" required />
  </div>
  <div className="col-md-3">
  <label for="validationCustom03" class="form-label">Localidad</label>
    <input type="text" class="form-control" id="validationCustom03" required />
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Direccion/Apartamento</label>
    <input type="text" className="form-control" id="validationCustom05" required />
  </div>
  <hr/>
  <h4 className="mb-3">Pago</h4>

<div className="my-3">
  <div className="form-check">
    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
    <label className="form-check-label" for="credit">Tarjeta de credito</label>
  </div>
  <div className="form-check">
    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
    <label className="form-check-label" for="debit">Tarjeta de debito</label>
  </div>
  <div className="form-check">
    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
    <label className="form-check-label" for="paypal">PayPal</label>
  </div>
</div>
<div className="col-md-4">
    <label for="validationCustom01" className="form-label">nombre de la tarjeta</label>
    <input type="text" class="form-control" id="validationCustom01"  required />
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">numero de tarjeta</label>
    <input type="text" class="form-control" id="validationCustom02"  required />
  </div>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">Vencimiento</label>
    <input type="text" class="form-control" id="validationCustom01"  required />
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" class="form-label">CVV</label>
    <input type="text" className="form-control" id="validationCustom02"  required />
     </div>
    <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Aceptar terminos y condicones
      </label>
    </div>
  </div>
<hr/>  


  <div className="col-12">
    <button className="btn btn-primary" type="submit" >Enviar</button>
  </div>
</form>
        
    )
}


export default Form