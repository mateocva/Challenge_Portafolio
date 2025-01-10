/*document.getElementById('botonDescarga').addEventListener('click', function () {
    const enlace = document.createElement('a');
    enlace.href = './pdf/HV.pdf'; // Ruta al archivo
    enlace.download = 'curriculo.pdf'; // Nombre sugerido
    enlace.click();
});*/

// Evento para descargar el archivo
document.getElementById('downloadBtn').addEventListener('click', function () {
    // Crear un elemento <a>
    const link = document.createElement('a');
    
    // Especificar la ruta local del archivo
    const fileURL = './pdf/HV.pdf'; // Ruta relativa al archivo
    
    // Configurar el enlace
    link.href = fileURL;
    link.download = 'HV.pdf'; // Nombre del archivo que se descargará
    
    // Añadir el enlace al DOM (aunque no se mostrará)
    document.body.appendChild(link);
    
    // Simular el clic para iniciar la descarga
    link.click();
    
    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
  });