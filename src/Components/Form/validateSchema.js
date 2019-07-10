import * as Yup from 'yup';

Yup.setLocale({

  mixed: {
    required: 'Campo Requerido', 
  },
  number:{  
    min: 'El monto debe ser mayor a 0',
    integer: "El monto tiene que ser expresado en enteros",
    negative: "El monto no puede ser negativo",
    max: "maximo"
  }
})

export default Yup.object().shape({
  address: Yup.string()
    .required(),
  city: Yup.string()
    .required(),
  realStateOperator: Yup.string()
    .required(),
  costOfOwnerShip: Yup.number()
    .required()
    .min(1)
    .integer(),
  rentalCost: Yup.number()
    .required()
    .min(1)
    .integer(),
  // yearsOfTheOperation: Yup.string()
  //   .required(),
  typeOfInvestment: Yup.array()
    .required('Debe seleccionar almenos unas de las opciones'),
  // eventualRentalProblems: "",
  percentageAppreciationOrDepreciation: Yup.array()
    .of(
      Yup.object().shape({
        percentage: Yup.number()
          .typeError("Campo Requerido")
          .max(100)
          .integer("El porcentaje tiene que ser expresado en enteros")
          // .required()
      })
    ),
  constitutionOfLLV: Yup.number()
    .required()
    .min(1)
    .integer(),
  transferCost: Yup.number()
    .required()
    .min(1)
    .integer("El porcentaje tiene que ser expresado en enteros"),
})