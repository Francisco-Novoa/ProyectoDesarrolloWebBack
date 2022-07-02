window.onload = async () => {
    //   const login = await axios.post("/api/login", {
    //     correo: "pancho",
    //     password: "1234567890",
    //   });
  
    const tablaClientes = document.getElementById("tabla-clientes");
    const bottonCrearCliente = document.getElementById(`crear-cliente-button`);
  
    const llenarMensaje = id => async mensaje => {
      const label = (document.getElementById(`message-cliente-${id}`).innerHTML =
        mensaje.response.data.error);
    };
  
    // const crearCliente = async () => {
      const password = document.getElementById(`crear-cliente-password`);
      const rut = document.getElementById(`crear-cliente-rut`);
      const correo = document.getElementById(`crear-cliente-correo`);
      const fecha_nacimiento = document.getElementById(`crear-cliente-fecha_nacimiento`);
      const genero = document.getElementById(`crear-cliente-genero`);
      const fono = document.getElementById(`crear-cliente-fono`);
      const direccion = document.getElementById(`crear-cliente-direccion`);
      const fono_emergencia = document.getElementById(`crear-cliente-fono_emergencia`);
      const nombre_emergencia = document.getElementById(`crear-cliente-nombre_emergencia`);
      const estado = document.getElementById(`crear-cliente-estado`);
      const derivar_a = document.getElementById(`crear-cliente-derivar_a`);
  
    //   try {
    //     const result = await axios.post("api/users", {
            // nombre: nombre.value,
            // password: password.value,
            // rut: rut.value,
            // correo: correo.value,
            // fecha_nacimiento: fecha_nacimiento.value,
            // genero: genero.value,
            // fono: fono.value,
            // direccion: direccion.value,
            // fono_emergencia: fono_emergencia.value,
            // nombre_emergencia: nombre_emergencia.value,
            // estado: estado.value,
            // derivar_a: derivar_a.value,
    //     });
    //     password.value = "";
    //     rut.value = "";
    //     correo.value = "";
    //     fecha_nacimiento.value = "";
    //     genero.value = "";
    //     fono.value = "";
    //     direccion.value = "";
    //     fono_emergencia.value = "";
    //     nombre_emergencia.value = "";
    //     estado.value = "";
    //     derivar_a.value = "";
    //     loadClientes();
    //   } catch (error) {
    //     alert(error);
    //   }
    // };
  
    // bottonCrearCliente.addEventListener("click", crearCliente);
  
    const editarCliente = id => async () => {
      const nombre = document.getElementById(`input-cliente-edit-${id}`);
      const password = document.getElementById(`crear-cliente-password`);
      const rut = document.getElementById(`crear-cliente-rut`);
      const correo = document.getElementById(`crear-cliente-correo`);
      const fecha_nacimiento = document.getElementById(`crear-cliente-fecha_nacimiento`);
      const genero = document.getElementById(`crear-cliente-genero`);
      const fono = document.getElementById(`crear-cliente-fono`);
      const direccion = document.getElementById(`crear-cliente-direccion`);
      const fono_emergencia = document.getElementById(`crear-cliente-fono_emergencia`);
      const nombre_emergencia = document.getElementById(`crear-cliente-nombre_emergencia`);
      const estado = document.getElementById(`crear-cliente-estado`);
      const derivar_a = document.getElementById(`crear-cliente-derivar_a`);
      
      try {
        const result = await axios.put(`/api/users/${id}`, {
            nombre: nombre.value,
            password: password.value,
            rut: rut.value,
            correo: correo.value,
            fecha_nacimiento: fecha_nacimiento.value,
            genero: genero.value,
            fono: fono.value,
            direccion: direccion.value,
            fono_emergencia: fono_emergencia.value,
            nombre_emergencia: nombre_emergencia.value,
            estado: estado.value,
            derivar_a: derivar_a.value,

        });
        loadClientes();
      } catch (error) {
        llenarMensaje(id)(error);
      }
    };
  
    const eliminarBanco = id => async () => {
      try {
        const result = await axios.delete(`/api/banco/${id}`);
        loadBancos();
      } catch (error) {
        llenarMensaje(id)(error.data.message);
      }
    };
  
    const loadClientes = async () => {
      const clientes = await axios.get("/api/users");
      tablaClientes.innerHTML = "";
      clientes.data.data.cliente.map(cliente => {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${cliente.password}</td>
          <td>${cliente.rut}</td>
          <td>${cliente.correo}</td>
          <td>${cliente.nombre}</td>
          <td>${cliente.fecha_nacimiento}</td>
          <td>${cliente.genero}</td>
          <td>${cliente.fono}</td>
          <td>${cliente.direccion}</td>
          <td>${cliente.fono_emergencia}</td>
          <td>${cliente.nombre_emergencia}</td>
          <td>${cliente.estado}</td>
          <td>${cliente.derivar_a}</td>
          <td>${cliente.createdAt}</td>
          <td>${cliente.updatedAt}</td>

          <td>
          <div class="ordenado">
          <label class="error" id="message-cliente-${cliente.rut}"> 
          </label >
          </div>
              <div class="ordenado">
                  <button id="button-send-cliente-edit-${cliente.rut}" >Editar</button>
                  <input type="text" id="input-cliente-edit-${cliente.rut}">
              </div>
          </td>
          <td>
          <button id="button-send-cliente-delete-${cliente.rut}" >Eliminar</button>
          </td>`;
        tablaclientes.appendChild(tableRow);
        document
          .getElementById(`button-send-cliente-delete-${cliente.rut}`)
          .addEventListener("click", eliminarCliente(cliente.rut));
        document
          .getElementById(`button-send-cliente-edit-${cliente.rut}`)
          .addEventListener("click", editarCliente(cliente.rut));
      });
    };
  
    loadClientes();
  };
  