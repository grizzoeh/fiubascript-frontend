import { CoinsResponse } from "../interfaces/coinInterface";

export const addCoins = async (userId : string, coins : number) => {
  try{
    const response = await fetch("https://fiubascript-backend.onrender.com/users/sum-coins", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, coins })
    });
    if (response.ok) {
      const data = await response.json() as CoinsResponse;
      console.log("Data: ",data);
      return data.coins
    }
    else {
      alert("Error adding coins");
    }
  } catch (error) {
    console.error(error);
    alert('Error adding coins');
  }
}

export const reduceCoins = async (userId : string, coins : number) => {
  try{
    const response = await fetch("https://fiubascript-backend.onrender.com/users/reduce-coins", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, coins })
    });
    if (response.ok) {
      const data = await response.json() as CoinsResponse;
      console.log("Data: ",data);
      return data.coins
    }
    else {
      alert("Error reducing coins");
    }
  } catch (error) {
    console.error(error);
    alert('Error reducing coins');
  }
}