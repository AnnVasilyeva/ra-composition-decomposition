import './App.css';
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import SearchForm from "./components/SearchForm";
import ExchangeRates from "./components/ExchangeRates";
import Advertising from "./components/Advertising";
import NewsList from "./components/NewsList";
import NewsItem from "./components/NewsItem";
import WidgetList from "./components/WidgetList";
import Widget from "./components/Widget";

function App() {
  const newsListCategory = [
      {title: 'Сейчас в СМИ', active: true},
      {title: 'в Краснодаре', active: false},
      {title: 'Рекомендуем', active: false}
  ];
  const newsItems = [
      {icon: 'http://placehold.it/15x15/', title: 'Поздравления с Новым годом!'},
      {icon: 'http://placehold.it/15x15/', title: 'Где отпраздновать 2021'},
      {icon: 'http://placehold.it/15x15/', title: 'Что подарить семье?'},
      {icon: 'http://placehold.it/15x15/', title: 'Новогодние рецепты'},
  ];
  const exchangeRates = [
      {name: 'USD', value: '63,52', changes: '+0,09'},
      {name: 'EUR', value: '70,86', changes: '+0,14'},
      {name: 'НЕФТЬ', value: '64,90', changes: '+1,63%'},
  ];
  const advertising = {icon: 'http://placehold.it/70x70/', title: 'Работа над ошибками', text: 'Смотрите на Яндексе и запоминайте', url: '#'};

  const date = new Date().toLocaleString();

  const nav = [
      {title: 'Видео', active: false},
      {title: 'Картинки', active: false},
      {title: 'Новости', active: true},
      {title: 'Карты', active: false},
      {title: 'Маркет', active: false},
      {title: 'Переводчик', active: false},
      {title: 'Эфир', active: false},
      {title: 'ещё', active: false},
  ];

  const tvProgram = [
      {time: '02:00', name: 'ТНТ.Best', canal: 'ТНТ.International'},
      {time: '02:15', name: 'Джинглики', canal: 'Карусель INT'},
      {time: '02:25', name: 'Наедине со всеми', canal: 'Первый'},
  ];

  const favorite = [
      {title: 'Недвижимость', text: 'о сталинках'},
      {title: 'Маркет', text: 'люстры и светильники'},
      {title: 'Авто.ру', text: 'привод 4x4 до 500 000'},
  ];

  const tv = [
      {name: 'Управление как искусство', canal: 'Успех'},
      {name: 'Kuplinov-play', canal: 'Youtube'},
      {name: 'Палата 23', canal: 'Youtube'},
  ]


  return (
    <div className="App">
      <header className='header-navigation'>
        <div className='nav-left'>
          <Nav className='nav-news'>
              {newsListCategory.map(item => <NavItem><NavLink disabled={item.active ? '' : 'disabled'} href="#">{item.title}</NavLink></NavItem>)}
            <div className='date'>{date}</div>
          </Nav>
            <NewsList items={newsItems}>
                {items => items.map(news => <NewsItem news={news}/>)}
            </NewsList>
          <ExchangeRates items={exchangeRates}/>
        </div>
        <Advertising item={advertising}/>
      </header>

      <main>
          <Nav className='nav-searchCategory'>
              {nav.map(item => <NavItem><NavLink disabled={item.active ? '' : 'disabled'} href="#">{item.title}</NavLink></NavItem>)}
          </Nav>
          <SearchForm/>
          <div className='advertising-section'>
              <img src='http://placehold.it/1000x70/'/>
          </div>
          <WidgetList>
              <Widget title='Погода' className='widget widget-weather'>
                 <div className='weather-info'>
                     <div>
                         <img src='http://placehold.it/50x50/'/>
                     </div>
                     <div>+17</div>
                     <div className='weather-time'>
                         <span>Утром +17,</span>
                         <span>днём +17</span>
                     </div>
                 </div>
              </Widget>
              <Widget title='Посещаемое' className='widget widget-visited'>
                  {favorite.map(item =>
                      <div>
                          <span>{item.title}</span>
                          <span>- {item.text}</span>
                      </div>
                  )}
              </Widget>
              <Widget title='Карта Краснодара' className='widget widget-map'>
                  <a href='#'>Расписания</a>
              </Widget>
              <Widget title='Телепрограмма' className='widget widget-tv-program'>
                  {tvProgram.map(item =>
                      <div>
                          <span>{item.time}</span>
                          <span>{item.name}</span>
                          <span className='tv-canal'>{item.canal}</span>
                      </div>
                  )}

              </Widget>
              <Widget title='Эфир' className='widget widget-tv'>
                  {tv.map(item =>
                      <div>
                          <span>
                              <i className='fa fa-play fa-sm'/>
                          </span>
                          <span>{item.name}</span>
                          <span>{item.canal}</span>

                      </div>
                  )}
              </Widget>
          </WidgetList>
      </main>
    </div>
  );
}

export default App;
