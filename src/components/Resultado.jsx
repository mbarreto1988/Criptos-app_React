import styled from "@emotion/styled"

const Result = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;    
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOURS, IMAGEURL, LASTUPDATE} = resultado

    return (
        <Result>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"/>
            <div>                
                <Precio>El precio es de: <span> {PRICE} </span></Precio>
                <Texto>El precio mas alto del dia es: <span> {HIGHDAY} </span></Texto>
                <Texto>El precio mas bajo del dia de: <span> {LOWDAY} </span></Texto>
                <Texto>La variacion de las ultimas 24hs es de: <span> {CHANGEPCT24HOURS} </span></Texto>
                <Texto>La ultima actualizacion es: <span> {LASTUPDATE} </span></Texto>
            </div>
        </Result>
    )
}

export default Resultado