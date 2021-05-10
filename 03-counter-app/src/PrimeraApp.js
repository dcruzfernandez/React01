import PropTypes from 'prop-types'

export const PrimeraApp = ({saludo,subtitulo}) => {
    
    return (
        <>
          <h1>{saludo}!!</h1>
          {/* <pre>{JSON.stringify(saludo,null,3)}</pre>   */}
          <p>{subtitulo}</p>
        </>
    )
}
//definir tipos de propiedades
PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
}

//definir valores predeterminados para las propiedades
PrimeraApp.defaultProps={
    subtitulo:'Soy subtitulo'
}
