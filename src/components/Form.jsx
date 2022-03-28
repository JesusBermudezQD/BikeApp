import React, { useState } from "react";
import styled from "styled-components";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import { jsPDF } from "jspdf";
import QRCode from "qrcode.react";

import { projectfirestore as db } from "../firebase/config";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 51px;
`;

const Form1 = styled.div`
  display: flex;

  width: auto;
  flex-direction: column;
  background: white;
  padding: 20px;

  @media screen and (max-width: 968px) {
    width: 300px;
  }
`;

const FormContainerImput = styled.div`
  display: flex;
  margin-bottom: 20px;
  & > div {
    width: 50%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    & > div {
      width: 100%;

      & > p {
        margin-top: 10px;
      }
    }
  }
`;

const FormContainerImput1 = styled(FormContainerImput)`
  & > div {
    width: 100%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const FormContainerImput2 = styled(FormContainerImput)`
  & > div {
    width: 100%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const FormContainerImput3 = styled(FormContainerImput)`
  & > div {
    width: 100%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;
const FormContainerImput4 = styled(FormContainerImput)`
  & > div {
    width: 100%;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const SelectForm = styled.select`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  width: 90%;
  padding: 5px;
  transition: 0.3s;
  margin-bottom: 15px;

  &:focus {
    border-bottom: 2px solid #7ab9cc;
    transition: 0.3s;
  }

  @media screen and (max-width: 968px) {
    width: 98%;
  }
`;

const InputForm = styled.input`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  width: 90%;
  padding: 5px;
  transition: 0.3s;
  margin: auto;
  text-transform: uppercase;

  &:focus {
    border-bottom: 2px solid #7ab9cc;
    transition: 0.3s;
  }

  @media screen and (max-width: 968px) {
    width: 98%;
  }
`;

const ButtonForm = styled.button`
  padding: 10px;
  background: #7ab9cc;
  font-size: 1em;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: auto;
  bottom: 0;
  &:hover {
    background: #6296a5;
  }
`;

const Total = styled.p`
  text-align: center;
  margin: 0px 5px 5px 5px;
  font-size: 50px;
`;

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    documento: 0,
    direccion: "",
    telefono: 0,
    tipo: "",
    cantidad: 0,
    fecha: "",
    horas: 0,
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const validateForm = () => {
    if (
      datos.nombre === "" ||
      datos.documento === 0 ||
      datos.direccion === "" ||
      datos.telefono === 0 ||
      datos.tipo === "" ||
      datos.cantidad === 0 ||
      datos.fecha === "" ||
      datos.horas === 0
    ) {
      MenssageError();
      return;
    } else {
      MenssageGood();
    }
  };

  const MenssageError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor comprueba que esten correctamente los campos!",
    });
  };

  const PDF = () => {
    const doc = new jsPDF();

    const templete = `
        ************************************************

        Nombre: ${datos.nombre}    
        Documento: ${datos.documento}
        Direccion: ${datos.direccion}
        Telefono: ${datos.telefono}
        Tipos de bici: ${datos.tipo}
        Cantidad: ${datos.cantidad}
        Fecha de busqueda: ${datos.fecha}
        Cantidad de horas: ${datos.horas}  

        ************************************************
        TOTAL: ${10000 * datos.horas * datos.cantidad}
        ************************************************
    `;

    doc.text(templete, 10, 10);
    doc.addImage(GenerateQr(), "JPEG", 40, 110, 60, 60);
    doc.save("recibo.pdf");
  };

  const GenerateQr = () => {
    const qr = document.querySelector("canvas");

    const dataImg = qr.toDataURL("image/png");

    return dataImg;
  };

  const enviarReserva = async () => {
    resetForm();
    await db.collection("reservas").add({
      datos,
    });
  };

  const resetForm = () => {
    setDatos({
      nombre: "",
      documento: 0,
      direccion: "",
      telefono: 0,
      tipo: "",
      cantidad: 0,
      fecha: "",
      horas: 0,
    });
  };

  const MenssageGood = () => {
    Swal.fire({
      title: "Desea continuar con el pedido?",
      text: "Antes de continuar comprueba los datos",
      showDenyButton: true,
      allowOutsideClick: false,
      // showCancelButton: true,
      confirmButtonText: `Continuar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        enviarReserva();
        Swal.fire({
          title:
            "Por favor descargue el volante para obtener el codigo de pedido y toda su informacion",
          text: "Al descargarlo facilita la interaccion en el local",
          allowOutsideClick: false,
          confirmButtonText: `Descargar`,
        }).then((result) => {
          if (result.isConfirmed) {
            PDF();
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Operacion no realizada", "", "info");
      }
    });
  };

  return (
    <FormContainer>
      <Form1>
        <FormContainerImput1>
          <div>
            <p>Nombre Completo</p>
            <InputForm
              type="text"
              name="nombre"
              onChange={handleInputChange}
              value={datos.nombre}
            />
          </div>

          <div>
            <p>Documento</p>
            <InputForm
              type="number"
              name="documento"
              min="0"
              onChange={handleInputChange}
              value={datos.documento}
            />
          </div>
        </FormContainerImput1>

        <FormContainerImput2>
          <div>
            <p htmlFor="address">Direccion</p>
            <InputForm
              type="text"
              name="direccion"
              onChange={handleInputChange}
              value={datos.direccion}
            />
          </div>

          <div>
            <p>Telefono</p>
            <InputForm
              type="number"
              name="telefono"
              min="0"
              onChange={handleInputChange}
              value={datos.telefono}
            />
          </div>
        </FormContainerImput2>

        <FormContainerImput3>
          <div>
            <p>Bicicleta</p>
            <SelectForm
              name="tipo"
              id="bike"
              onChange={handleInputChange}
              value={datos.tipo}
            >
              <option selected="true" disabled="disabled">
                Seleccione la Bicicleta
              </option>
              <option value="Opcion1">Opcion1</option>
              <option value="Opcion2">Opcion2</option>
              <option value="Opcion3">Opcion3</option>
              <option value="Opcion4">Opcion4</option>
            </SelectForm>
          </div>
          <div>
            <p>Cantidad</p>
            <InputForm
              type="number"
              name="cantidad"
              id="amount"
              min="1"
              max="5"
              onChange={handleInputChange}
              value={datos.cantidad}
            />
          </div>
        </FormContainerImput3>

        <FormContainerImput4>
          <div>
            <p>Fecha</p>
            <InputForm
              type="date"
              name="fecha"
              id="fecha"
              onChange={handleInputChange}
              value={datos.fecha}
            />
          </div>

          <div>
            <p>Horas de alquiler</p>
            <InputForm
              type="number"
              name="horas"
              min="1"
              max="9"
              onChange={handleInputChange}
              value={datos.horas}
            />
          </div>
        </FormContainerImput4>

        <Total>$ {10000 * datos.horas * datos.cantidad}</Total>

        <ButtonForm onClick={validateForm}>APARTAR</ButtonForm>
      </Form1>
      <QRCode
        value={datos.documento}
        size={128}
        style={{ position: "absolute", visibility: "hidden" }}
      />
    </FormContainer>
  );
};

export default Form;
