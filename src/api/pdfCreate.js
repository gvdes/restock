import QRCode from 'qrcode';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import AssitApi from 'src/api/AssistApi.js';
import dayjs from 'dayjs';



  const pdf = async (data, qrvalue, pedido) => {
    // console.log(data.folio);
    let sal = {
      salida: data
    }
    const currentDate = new Date();
    let dat = await AssitApi.getSalida(sal);
    console.log(dat);
    if (dat.status == 200) {
      const qrData = `http://192.168.10.189:2200/#/checkin/${pedido}?key=${qrvalue}`;
      // const qrData = `http://192.168.10.112:9000/#/checkin/${pedido}?key=${qrvalue}`;

      const qrOptions = {
        margin: 1,
        width: 1,
        height: 1
      }
      const canvas =  document.createElement('canvas');
      await QRCode.toCanvas(canvas, qrData, qrOptions);
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      let chunks = [];
      const arreglo = dat.data.productos.map(producto => Object.values(producto));
      const paginas = Math.ceil(arreglo.length / 20);
      for (var i = 0; i < arreglo.length; i += 20) {

        // console.log(arreglo[i])

        chunks.push(arreglo.slice(i, i + 20));
      }
      console.log(chunks);
      for (let i = 0; i < 2; i++) {
        let copias = 'ORIGINAL'
        if (i > 0) {
          copias = 'COPIA'
          doc.addPage();
        }
        chunks.forEach(function (chunk, index) {
          if (index > 0) {
            doc.addPage();
          }

          let sumaBullfa = 0;
          let totcan = 0;
          for (let i = 0; i < chunk.length; i++) {
            chunk[i][1] = chunk[i][1] == 0 ? 1 : parseFloat(chunk[i][1]);
            chunk[i][2] = parseFloat(chunk[i][2]);
            chunk[i][3] = parseFloat(chunk[i][3]);
            sumaBullfa += parseFloat(chunk[i][1]); // Sumar al total la propiedad 'BULLFA' convertida a número
            totcan += parseFloat(chunk[i][3]);
          }


          for (let i = 0; i < chunk.length; i++) {
            // Sumar al total la propiedad 'BULLFA' convertida a número
          }

          doc.setFontSize(25)
          doc.setFont('helvetica', 'bold')
          doc.text("GRUPO VIZCARRA", 105, 10, "center");
          doc.setFontSize(8)
          doc.text('NUMERO PEDIDO:', 10, 10, 'left')
          doc.text(dat.data.salida.FOLIO, 10, 15, 'left');
          doc.setFontSize(12)
          doc.text(copias, 185, 10, 'left');
          doc.text(dat.data.salida.CLIENTE, 10, 25, 'left')
          doc.text('LLUVIA LIGTH SA DE CV', 120, 25, 'left')
          doc.setFontSize(8)
          doc.text('CALLE AN PABLO 10 LOC G 10', 120, 30, 'left')
          doc.text('06090', 120, 35, 'left')
          doc.text('DELEG, CUAUHTEMOC CDMX       CENTRO', 120, 40, 'left')
          doc.text('LLI1210184G8', 120, 45, 'left')
          doc.text('HORA DE IMP:', 10, 50, 'left')
          doc.rect(45, 46, 15, 5);
          doc.text(dayjs(currentDate).format("HH:mm:ss"), 47, 50)
          doc.text('HR SALIDA M:', 61, 50, 'left')
          doc.rect(91, 46, 15, 5);
          doc.text('LLEGADA A SUCURSAL:', 10, 60, 'left')
          doc.rect(45, 56, 15, 5);
          doc.text('SALIDA SUCURSAL:', 61, 60, 'left')
          doc.rect(91, 56, 15, 5);
          doc.rect(120, 51, 80, 5);
          doc.text('DOCUMENTO', 121, 55, 'left')
          doc.text('FACTURA', 121, 60, 'left')
          doc.text('NUMERO', 143, 55, 'left')
          doc.text(dat.data.salida.FACTURA, 143, 60, 'left')
          doc.text('PAGINA', 165, 55, 'left')
          doc.text(`${index + 1} de ${paginas}`, 165, 60, 'left')
          doc.text('FECHA', 185, 55, 'left')
          const fecha = dayjs(dat.data.salida.FECHA).format("YYYY-MM-DD")
          doc.text(fecha, 185, 60, 'left')
          autoTable(doc, {
            startX: 10,
            startY: 65,
            theme: 'plain',
            styles: { cellPadding: 1, fontSize: 8, halign: 'center' },
            head: [['CREADOR DOC', 'ALMACEN', 'AGENTE', 'FORMA DE PAGO']],
            body: [
              ['APP', dat.data.salida.AMACEN, dat.data.salida.AGENTE, dat.data.salida.FPAGO],
            ],
          })

          autoTable(doc, {
            startX: 10,
            startY: 80,
            theme: 'striped',
            styles: { cellPadding: .6, fontSize: 8, halign: 'center' },
            head: [['ARTICULO', 'CAJAS', 'U.X CAJA', 'CANTIDAD', 'DESCRIPCION']],
            body: chunk,
            columnStyles: {
              0: { fontStyle: 'bold', halign: 'left' },
              1: { fontStyle: 'bold', halign: 'center' },
              4: { halign: 'left' },
            },

          })

          doc.setFontSize(11)
          doc.text('TOTAL CAJAS:', 10, 200, 'left')
          doc.text(sumaBullfa.toString(), 40, 200, 'left')
          doc.text('TOTAL UNIDDADES:', 60, 200, 'left')
          doc.text(totcan.toString(), 100, 200, 'left')
          doc.setFontSize(8)
          doc.text('Debo(emos) y pagare(mos) incondicionalmente por este pagare a la order de GRUPO VIZCARRA, en la ciudad de Mexico,', 10, 210, 'left')
          doc.text('la cantidad de el valor recibido a mi(nuestra) entera satisfaccion', 10, 215, 'left')
          doc.text('Este pagare forma parte de una serie numerica del 1 al y 9 y todos estos estan sujetos a la condicion, de que al no pagarse cualquiera de ellos a su', 10, 220, 'left')
          doc.text('vencimiento sean exigibles todos los que le sigan en numero, ademas de los ya vencidosm desde la fecha de su vencimiento de el presente documento', 10, 225, 'left')
          doc.text('hasta el dia de su liquidacion, causaran intereses moratorios al tipo del % mensual en esta ciudad justamente con el principal', 10, 230, 'left')
          doc.setFontSize(15)
          doc.text('______________', 31, 248, 'center')
          doc.text('AUTORIZO', 20, 254, 'left')
          doc.text('______________', 85, 248, 'center')
          doc.text('CHOFER', 75, 254, 'left')
          doc.text('______________', 140, 248, 'center')
          doc.text('RECIBIO', 130, 254, 'left')
          doc.text('______________', 168, 248, 'left')
          doc.text('FECHA Y HORA', 168, 254, 'left')
          doc.setFontSize(9)
          doc.text('UNA VEZ ENTREGADA LA MERCANCIA EN LA FLETERA O DOMICILIO QUE INDIQUE EL CLIENTE ', 10, 260, 'left')
          doc.text('LLUVIA LIGHT SA DE CV NO ES RESPONSABLE POR PEDIDAS TOTALES, PARCIALES ', 10, 265, 'left')
          doc.text('O CUALQUIER TIPO DE DANO EN LA MERCANCIA DE ESTE DOCUMENTO ', 10, 270, 'left')
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(12)
          doc.text('NO SE ACEPTAN CAMBIOS NI DEVOLUCIONES', 10, 280, 'left')
          doc.setFontSize(25)
          doc.setFont('helvetica', 'bold')
          doc.text("GRUPO VIZCARRA", 105, 10, "center");
          doc.addImage(imgData, 'PNG', 95, 25, 20, 20);
        })
      }
      doc.save(dat.data.salida.FACTURA)

    } else {
      console.error('No se logro imprimir la factura');
    }

}

export default {
  pdf
}
