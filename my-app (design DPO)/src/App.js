import logo from './logo.svg';
import './App.css';
import Header from './components/common-components/Header';
import Herosection from './components/Herosection';
import Banifitssection from './components/Banifitssection';
import beni1 from './accests/images/benefits_subimage_1.jpg';
import beni2 from './accests/images/benefits_subimage_2.jpg';
import beni3 from './accests/images/benefits_subimage_3.jpg';
import beni4 from './accests/images/benefits_subimage_4.png';
import beni5 from './accests/images/benefits_subimage_5.jpg';
import benisub1 from './accests/images/benefits_subimage_icon_11681880477.svg';
import benisub2 from './accests/images/benefits_subimage_icon_21681880477.svg';
import benisub3 from './accests/images/benefits_subimage_icon_31681880478.svg';
import benisub4 from './accests/images/benefits_subimage_icon_41681880478.svg';
import benisub5 from './accests/images/benefits_subimage_icon_51681880478.svg';
import NewDesign from './components/NewDesign';
import Categorires from './components/Categorires';
import cart1 from './accests/images/category_1670237513_450x450.jpg';
import cart2 from './accests/images/category_1670320359_450x450.jpg';
import cart3 from './accests/images/category_1677749532_450x450.jpg';
import cart4 from './accests/images/category_1693140305_450x450.jpg';
import cart5 from './accests/images/category_1693140478_450x450.jpg';
import cart6 from './accests/images/category_1693140854_450x450.jpg';
import cart7 from './accests/images/category_1693141357_450x450.jpg';
import cart8 from './accests/images/category_1693141997_450x450.jpg';
import cart9 from './accests/images/category_1693142642_450x450.jpg';
import TrendingDesign from './components/TrendingDesign';
import Clintsatsisfection from './components/Clintsatisfection';
import trend1 from './accests/images/mainDD_584_650x650.jpg';
import trend2 from './accests/images/mainDD_591_650x650.jpg';
import trend3 from './accests/images/mainDD_598_650x650.jpg';
import trend4 from './accests/images/mainDD_968_650x650.jpg';
import trend5 from './accests/images/mainDD_982_650x650.jpg';
import trend6 from './accests/images/main_1678955379_650x650.jpg';
import trend7 from './accests/images/main_1678955614_650x650.jpg';
import trend8 from './accests/images/main_1678960424_650x650.jpg';
import trend9 from './accests/images/main_1679313919_650x650.jpg';
import trend10 from './accests/images/main_1679556213_650x650.jpg';
import trend11 from './accests/images/main_1679558505_650x650.jpg';
import trend12 from './accests/images/main_1679558684_650x650.jpg';
import trend13 from './accests/images/main_1681821910DD_827_650x650.jpg';
import trend14 from './accests/images/main_1681891622DD_3569_650x650.jpg';
import trend15 from './accests/images/main_1681898899DD_3591_650x650.jpg';
import trend16 from './accests/images/1676369859_mainDD_639_650x650.jpg';

function App() {
  
  const benefitArr = [
    {
      img: beni1,
      content:{
        title: 'Many Options In All Designs',
        btn: 'Explore Design',
        subImg: benisub1
      }

    },
    {
      img: beni2,
      content:{
        title: 'High Resolution 3D Drawings',
        btn: 'know more',
        subImg: benisub2
      }

    },
    {
      img: beni3,
      content:{
        title: '2D Measurements Of Per Drawing',
        btn: 'view more',
        subImg: benisub3
      }

    },
    {
      img: beni4,
      content:{
        title: 'Many Options In All Designs',
        btn: 'view more',
        subImg: benisub4
      }

    },
    {
      img: beni5,
      content:{
        title: 'Material List For Cost Calculation Of Furniture',
        btn: 'view more',
        subImg: benisub5
      }

    }
  ];

  const categoriesArr =[
     {
      img: cart1,
      title: 'Childern Bedroom Design'
     },
     {
      img: cart2,
      title: 'Living Room Design'
     },
     {
      img: cart3,
      title: 'Dining Area'
     },
     {
      img: cart4,
      title: 'Bedroom Designs'
     },
     {
      img: cart5,
      title: 'Wardrob Design'
     },
     {
      img: cart6,
      title: 'TV Unit Design'
     },
    //  {
    //   img: cart7,
    //   title: 'Modular Kitchen Design'
    //  },
    //  {
    //   img: cart8,
    //   title: 'Bedroom Design'
    //  },
    //  {
    //   img: cart9,
    //   title: 'Bathroom Design'
    //  },
     
  ];
  const TrendingArr =[
    {
      img: trend1,
      title: 'children bedroom designs'
    },
    {
      img: trend2,
      title: 'children bedroom designs'
    },
    {
      img: trend3,
      title: 'children bedroom designs'
    },
    {
      img: trend4,
      title: 'children bedroom designs'
    },
    {
      img: trend5,
      title: 'children bedroom designs'
    },
    {
      img: trend6,
      title: 'children bedroom designs'
    },
    {
      img: trend7,
      title: 'children bedroom designs'
    },
    {
      img: trend8,
      title: 'children bedroom designs'
    },
    {
      img: trend9,
      title: 'children bedroom designs'
    },
    {
      img: trend10,
      title: 'children bedroom designs'
    },
    {
      img: trend11,
      title: 'children bedroom designs'
    },
    {
      img: trend12,
      title: 'children bedroom designs'
    },
    {
      img: trend13,
      title: 'children bedroom designs'
    },
    {
      img: trend14,
      title: 'children bedroom designs'
    },
    {
      img: trend15,
      title: 'children bedroom designs'
    },
    {
      img: trend16,
      title: 'children bedroom designs'
    },

  ];
  return (
  <>
  <Header/>
  <Herosection/>
  <Banifitssection details={benefitArr}/>
  <NewDesign/>
  <Categorires details={categoriesArr}/>
  <TrendingDesign data={TrendingArr}/>
  <Clintsatsisfection/>
   </>
  );
}

export default App;
