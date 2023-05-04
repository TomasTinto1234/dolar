"use client";

import type {Cotizacion} from "../types";
import "../components/form.css"
import {useState} from "react";

import Form from "../components/Form";

export default function HomeClient({cotizaciones}: {cotizaciones: Cotizacion[]}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid-container">
      <section  className="form-container">
        <Form value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="list-container">
        <ul className="list">
          {cotizaciones.map(({nombre, venta}) => {
            const total = amount ? Number(amount / venta) : venta;

            return (
              <li key={nombre}  className="list-item">
                <div className="item-name">{nombre}</div>
                <div className="item-values">
                  {amount ? (
                    <div  className="item-total">$
                      {Number(total).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  ) : null}
                  <div className="item-price">
                    {Number(venta).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
