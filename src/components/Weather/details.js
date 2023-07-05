import React from 'react';

const Details = ({data}) => {

const {name,sys,main,weather,wind} = data

    return (
        <div className='py-5  my- flex items-center justify-center flex-col gap-5 w-[50%] mx-auto rounded-xl	 bg-blue-300'>

            <h1>{name} <span>{sys?.country}</span></h1>
            <h2>Температура: {main?.temp} <sup>0c</sup></h2>
            <h2>Скорость ветра: {wind?.speed}</h2>
            {
                weather?.map(el => (<h3>{el.description}</h3>))
            }
            {
                weather?.map(el => (<img width={200} src={`http://openweathermap.org/img/w/${el.icon}.png`}/>))
            }
            {/* var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; */}
        </div>
    );
};

export default Details;