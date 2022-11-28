export function formatFechaString( fecha: string){
    let fechaFormateada = ''
    let temporal = ""
    for (const c of fecha) {
      if (c!= "-")
        temporal +=  c
      else {
        fechaFormateada = "-"+temporal+fechaFormateada
        temporal = ""
      }
    }
    fechaFormateada = temporal+fechaFormateada
    return fechaFormateada
  }