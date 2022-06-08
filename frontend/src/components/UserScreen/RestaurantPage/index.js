import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from '../../../controllers/user';



const RestaurantPage = () => {
  const [restaurant, setRestaurants] = useState("")
  const [menu, setMenu] = useState("")
  const [categories, setCategories] = useState("")
  const [arraydetials, setArraydetials] = useState("")
  const getRestarnt = async () => {
    const responseRestarnt = await User.getRestaurantById({ restaurantId: 1 })
    console.log(responseRestarnt.result)
    setRestaurants(responseRestarnt.result)

    const responseMeal = await User.getMealsByRestaurant({ restaurantId: 1 })

    setMenu(responseMeal.result)

    setCategories(responseMeal.categories)



    let array = []
    let arrayTwo = []
    let arrayLoop = []

    const filter = await responseMeal.categories.map((element, indexOne) => {
      console.log("5")
      arrayLoop.push({ catoName: element, mallloop: [] })
      responseMeal.result.map((elem, indextow) => {
        if (elem.category.includes(element)) {

          array.push(element)
          arrayTwo.push(elem)
          arrayLoop[indexOne].mallloop.push(elem)
        }

      })
      console.log(arrayLoop[indexOne])
    })

    console.log(array)
    console.log(arrayTwo)
    console.log(arrayLoop)
    setArraydetials(arrayLoop)

  }






  useEffect(() => {
    getRestarnt()

  }, [])

  console.log(arraydetials)
  return (<div className="RestaurantPage">
    <div>Navbar</div>

    <div className='Allinform' >
      <div className='Res_One' >One</div>



      <div className='Res_two'>


        <div className='Res_two_A' >{restaurant ? restaurant.map((element, index) => {
          return (<div className='Res_two_A_A' >

            <div><img src={element.Logo} /></div>

            <div><h1>{element.name}</h1>
              <h2>{element.rest_category}</h2>
            </div>


          </div>)






        }) : ""}

        </div>

        <div className='Res_two_B' >
          <div className='Res_two_B_A'>{categories ? categories.map((element, index) => {

            return (<div className='divsticky'>
              <a href={"#" + index}>{element}</a>

            </div>)
          }) : ""}</div>




          <div className='Res_two_B_B'>{arraydetials ? arraydetials.map((element, index) => {
            return (<div className='div_Mallloop_1'>

              <details open id={index}>
                <summary>{element.catoName}</summary>
                <div>{element.mallloop ? element.mallloop.map((elementMall, index) => {
                  return (<div className='div_Mallloop_2'>
                    <img className='imagetest' src={elementMall.imgUrl} />
                    <h1>{elementMall.name}</h1>


                  </div>)


                }) : ""}</div>

              </details>

            </div>
            )
          }) : ""}</div>



          <div className='Res_two_B_c'>cart cart  cart cart cart cart </div>

        </div>





      </div>



      <div className='Res_three'>three</div>
    </div>
  </div>
  );
};

export default RestaurantPage;