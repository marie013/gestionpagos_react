import { useState, useEffect } from "react";

export default function Pagos() {
  const [formasPago, setFormasPago] = useState([{ tipo: "", monto: "" }]);
  const [datosProveedor, setDatosProveedor] = useState({
    nombre_cliente: "",
    cuit_cliente: "",
    direccion_cliente: "",
    correo_electronico_cliente: "",
    telefono: "",
  });
  const [descripcion, setDescripcion] = useState("");
  const [total, setTotal] = useState(0);
  const [estadoPago, setEstadoPago] = useState(""); // New state for payment status


  const handleDatosProveedorChange = (event) => {
    const { name, value } = event.target;
    setDatosProveedor((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormaPagoChange = (index, event) => {
    const { name, value } = event.target;
    const nuevasFormasPago = [...formasPago];
    nuevasFormasPago[index][name] = value;
    setFormasPago(nuevasFormasPago);
  };

  const agregarFormaPago = () => {
    setFormasPago([...formasPago, { tipo: "", monto: "" }]);
  };

  const eliminarFormaPago = (index) => {
    const nuevasFormasPago = formasPago.filter((_, i) => i !== index);
    setFormasPago(nuevasFormasPago);
  };

  const handleEstadoPagoChange = (event) => {
    setEstadoPago(event.target.value);
  };

  useEffect(() => {
    // Calcula el total cada vez que cambie el estado de formasPago
    const nuevoTotal = formasPago.reduce(
      (sum, { monto }) => sum + parseFloat(monto || 0),
      0
    );
    setTotal(nuevoTotal);
  }, [formasPago]);

  return (
    <form className="space-y-8 p-6 bg-white shadow-md rounded-lg">
      <div className="border-b border-gray-300 pb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Datos del Cliente
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          {/* Nombre del Proveedor */}
          <div className="sm:col-span-1">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Cliente
            </label>
            <input
              id="nombre_cliente"
              name="nombre_cliente"
              type="text"
              value={datosProveedor.nombre_cliente}
              onChange={handleDatosProveedorChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Email del Proveedor */}
          <div className="sm:col-span-1">
            <label
              htmlFor="cuit"
              className="block text-sm font-medium text-gray-700"
            >
              Cuit
            </label>
            <input
              id="cuit_cliente"
              name="cuit_cliente"
              type="email"
              value={datosProveedor.cuit_cliente}
              onChange={handleDatosProveedorChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>

          {/* Dirección del Proveedor */}
          <div className="sm:col-span-1">
            <label
              htmlFor="direccion_cliente"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección
            </label>
            <input
              id="direccion_cliente"
              name="direccion_cliente"
              type="text"
              value={datosProveedor.direccion_cliente}
              onChange={handleDatosProveedorChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          
          <div className="sm:col-span-1">
            <label
              htmlFor="  correo_electronico_cliente"
              className="block text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              id="  correo_electronico_cliente"
              name="  correo_electronico_cliente"
              type="  correo_electronico_cliente"
              value={datosProveedor.  correo_electronico_cliente}
              onChange={handleDatosProveedorChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>


          {/* Teléfono del Proveedor */}
          <div className="w-full mx-1 gap-9 flex">
            <div className="hili">
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={datosProveedor.telefono}
                onChange={handleDatosProveedorChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div className="hola ">
              <label
                htmlFor="numeroFactura"
                className="block text-sm font-medium text-gray-700"
              >
                N° Factura
              </label>
              <input
                id="numeroFactura"
                name="numeroFactura"
                type="text"
                // value="numeroFactura"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-100 focus:ring-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-xl font-bold text-gray-900">Formas de Pago</h2>

        {formasPago.map((pago, index) => (
          <div key={index} className="mt-4  border-gray-300 pt-4">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
              {/* Tipo de Pago */}
              <div className="sm:col-span-1">
                <label
                  htmlFor={`tipo_${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo de Pago
                </label>
                <select
                  id={`tipo_${index}`}
                  name="tipo"
                  value={pago.tipo}
                  onChange={(event) => handleFormaPagoChange(index, event)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Seleccionar</option>
                  <option value="Transferencia">Transferencia </option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Tarjeta">Tarjeta de debito</option>
                  {/* Agrega más opciones si es necesario */}
                </select>
              </div>

              {/* Monto */}
              <div className="sm:col-span-1">
                <label
                  htmlFor={`monto_${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Monto
                </label>
                <input
                  id={`monto_${index}`}
                  name="monto"
                  type="number"
                  value={pago.monto}
                  onChange={(event) => handleFormaPagoChange(index, event)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor={`monto_${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Nro de operción
                </label>
                <input
                  id="num_pago"
                  name="num_pago"
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>

              {formasPago.length > 1 && (
                <div className="sm:col-span-1 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => eliminarFormaPago(index)}
                    className="inline-flex items-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mt-4">
          <button
            type="button"
            onClick={agregarFormaPago}
            className="inline-flex items-center rounded-md 4 bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Agregar Forma de Pago
          </button>
        </div>
      </div>
     

      <div className=" gray-1000 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Estado del Pago</h2>
        <div className="sm:col-span-2">
          <label
            htmlFor="estadoPago"
            className="block text-sm font-medium text-gray-700"
          >
            Estado del Pago
          </label>
          <select
            id="estadoPago"
            name="estadoPago"
            value={estadoPago}
            onChange={handleEstadoPagoChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="">Seleccionar estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Parcial">Parcialmente Pagado</option>
            <option value="EnProceso">En Proceso</option>
            <option value="Rechazado">Rechazado</option>
          </select>
        </div>
      </div>
      {/* Descripción */}
      <div className="border-b  w-full pb-6">
        <label
          htmlFor="descripcion"
          className="block text-full font-medium text-gray-700"
        >
          Descripción
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="6" // Aumenta el número de filas
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-1/2 border "/>
      
      </div>

      {/* Total */}
      <div className="flex justify-between items-center border-gray-300 pt-6">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <span className="text-lg font-semibold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Botón de Guardar */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-green-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
