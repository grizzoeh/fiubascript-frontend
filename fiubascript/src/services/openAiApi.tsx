// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.REACT_APP_OPENAI_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export const getQuestionsFromIA = async () => {
//   try {
//     const result = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: generatePrompt(),
//       temperature: 0.6,
//       max_tokens: 1500,
//     });
//     const questions = await JSON.parse(result.data.choices[0].text);
//     return (questions);
//   } catch (e) {
//     return ("Something is going wrong, Please try again.");
//   }
// };

// const generatePrompt = () => {
//   return (
//     `Necesito que generes 12 preguntas de opción múltiple distintas.
//     Cada una de las preguntas tiene que tener 4 opciones distintas, en la que solo una es la correcta.
//     Tómate tu tiempo para pensar la verdadera respuesta correcta.
//     Cada una de las preguntas y cada una de las respuestas no pueden superar los 100 caracteres.
//     Las preguntas y respuestas deben formar una lista separada por comas, donde cada pregunta está en formato json, ubicando la respuesta correcta tanto dentro de las "respuestas" como en el capo "correcta". 
//     Usar el tamplate entre triple comillas.
//     '''[{
//       "pregunta": "",
//       "respuestas": ["","","",""],
//       "correcta": ""
//     },
//     ...]'''
//     `
//   )
// }

export const getQuestionsFromIA = async () => {
  const answer = {
    "warning": "This model version is deprecated. Migrate before January 4, 2024 to avoid disruption of service. Learn more https://platform.openai.com/docs/deprecations",
    "id": "cmpl-8P0RTmNVF1NGCHXkFDpcUk4qLUFwm",
    "object": "text_completion",
    "created": 1700970591,
    "model": "text-davinci-003",
    "choices": [
      {
        "text": "\n[{\n      \"pregunta\": \"¿Cuál es el color primario?\",\n      \"respuestas\": [\"Azul\",\"Amarillo\",\"Rojo\",\"Verde\"],\n      \"correcta\": \"Rojo\"\n    },\n    {\n      \"pregunta\": \"¿Qué elemento compone la tabla periódica?\",\n      \"respuestas\": [\"Átomos\",\"Moléculas\",\"Cristales\",\"Compuestos\"],\n      \"correcta\": \"Átomos\"\n    },\n    {\n      \"pregunta\": \"¿Qué planeta es el más cercano al Sol?\",\n      \"respuestas\": [\"Tierra\",\"Venus\",\"Marte\",\"Júpiter\"],\n      \"correcta\": \"Mercurio\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el animal más grande del mundo?\",\n      \"respuestas\": [\"Rinoceronte\",\"Elefante\",\"Ballena Azul\",\"Cocodrilo\"],\n      \"correcta\": \"Ballena Azul\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el océano más grande del mundo?\",\n      \"respuestas\": [\"Atlántico\",\"Índico\",\"Pacífico\",\"Arctico\"],\n      \"correcta\": \"Pacífico\"\n    },\n    {\n      \"pregunta\": \"¿Cuáles son los colores del arcoiris?\",\n      \"respuestas\": [\"Azul, Rojo, Amarillo\",\"Amarillo, Verde, Negro\",\"Azul, Amarillo, Rojo\",\"Rojo, Naranja, Verde\"],\n      \"correcta\": \"Azul, Amarillo, Rojo\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el estado de la materia más común?\",\n      \"respuestas\": [\"Sólido\",\"Líquido\",\"Gaseoso\",\"Plasma\"],\n      \"correcta\": \"Líquido\"\n    },\n    {\n      \"pregunta\": \"¿Qué tipo de árbol produce nueces?\",\n      \"respuestas\": [\"Roble\",\"Pino\",\"Abeto\",\"Nogal\"],\n      \"correcta\": \"Nogal\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el mayor país del mundo?\",\n      \"respuestas\": [\"India\",\"China\",\"Estados Unidos\",\"Rusia\"],\n      \"correcta\": \"Rusia\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el estado de la materia más denso?\",\n      \"respuestas\": [\"Gaseoso\",\"Sólido\",\"Plasma\",\"Líquido\"],\n      \"correcta\": \"Sólido\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el elemento más abundante en la corteza terrestre?\",\n      \"respuestas\": [\"Oxígeno\",\"Hidrógeno\",\"Carbono\",\"Nitrógeno\"],\n      \"correcta\": \"Oxígeno\"\n    },\n    {\n      \"pregunta\": \"¿Cuál es el lugar más profundo del océano?\",\n      \"respuestas\": [\"Marianas\",\"Tonga\",\"Cuba\",\"Fosa de las Marianas\"],\n      \"correcta\": \"Fosa de las Marianas\"\n    }]",
        "index": 0,
        "logprobs": null,
        "finish_reason": "stop"
      }
    ],
    "usage": {
      "prompt_tokens": 251,
      "completion_tokens": 842,
      "total_tokens": 1093
    }
  }

  const questions = await JSON.parse(answer.choices[0].text);
  return (questions)
};

