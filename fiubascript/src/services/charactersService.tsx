export const buyCharacter = async (characterId: number, cost: number,userId : string) => {
    try{
      const response = await fetch("https://fiubascript-backend.onrender.com/marketplace/buy", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ characterId,cost,userId})
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data: ",data);
        return data.coins
      }
      else {
        alert("No tiene suficientes monedas para realizar la compra");
      }
    } catch (error) {
      console.error(error);
      alert('Error adding coins');
    }
  }


  export const updateCharacters = async (userId : string, characterId: number) => {
    try{
      const response = await fetch("https://fiubascript-backend.onrender.com/users/characters", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ userId,characterId,})
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data: ",data);
        return data.currentCharacter
      }
      else {
        alert("Error updating character");
      }
    } catch (error) {
      console.error(error);
      alert('Error updating character');
    }
  }