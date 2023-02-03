
function Author() {
function Select({text}) {
    console.log(text);
    if(text===text1)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text1.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text2)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text2.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text3)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text3.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text4)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text4.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
    if(text===text5)
    return (
      <select onChange={handleChange} className='NIN1 text-secondary' name="fruits" id="fruit-select">
        {text5.map((option,title) => {
          return (<option class="text-light" key={title} value={option.value}>{option.text}</option>)
        })
        }
      </select>
    )
}
const handleChange = event => {
    console.log(event.target.value);
  };

const text1=[ {value: 'Director', text: 'Director'},
      {value: 'Shareholder', text: 'Shareholder'},
      {value: 'Civilian', text: 'Civilian '},
      {value: 'Unarmed Guard', text: 'Unarmed Guard'},
      {value: 'Armed Guard', text: 'Armed Guard'},
      {value: 'Closed Protection Officer', text: 'Closed Protection Officer'},
      {value: 'Unarmed Guard', text: 'Unarmed Guard'},
      {value: 'Private Investigator', text: 'Private Investigator'},
    ];
    const text2=[ {value: 'Assign to PSO', text: 'Assign to PSO'},
      {value: 'Hues of Blues', text: 'Hues of Blues'},
      {value: 'Green Team', text: 'Green Team '},
      {value: 'Blessed Rest', text: 'Blessed Rest'},
      {value: 'THe Home Dome', text: 'THe Home Dome'},
      {value: 'Peak Performance', text: 'Peak Performance'}
    ];
    const text3=[ {value: 'Status', text: 'Status'},
      {value: 'cleared', text: 'cleared'},
      {value: 'pending clearence', text: 'pending clearence '},
      {value: 'unassigned', text: 'unassigned'},
      {value: 'under investigation', text: 'under investigation'},
      {value: 'dismissed', text: 'dismissed'},
      {value: 'Deceased', text: 'Deceased'},
      {value: 'voluntarily left', text: 'voluntarily left'},
    ];
    const text4=[ {value: 'Gender', text: 'Gender'},
      {value: 'Male', text: 'Male'},
      {value: 'Female', text: 'Female '},
    ];
    const text5=[ {value: 'UCE', text: 'UCE'},
      {value: 'UACE', text: 'UACE'},
      {value: 'DIPLOMA', text: 'DIPLOMA '},
      {value: 'DEGREE', text: 'DEGREE'},
      {value: 'MASTERS', text: 'MASTERS'},
      {value: 'PHD', text: 'PHD'},
    ];
    
   return (
    <>
    <Select text={text1}/>
     <Select text={text2}/>
     </>
   )
 }
 
 export default Author

