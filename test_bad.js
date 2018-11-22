function createInfoAdic (ACCOUNT_TYPE, PERSON_TYPE, BENEF_NAME_ECOSECTOR, BANK_MAX_AMOUNT, ACCOUNT_NUMBER, COUNTRY, ESTATE, CITY, MAX_AMOUNT, PERIOD, ECONOMIC_SECTOR, RFC_CURP) {
	console.log($('.algo').next('.lol').length)
  var lang = '1'
  if($('.algo').next('.lol').length == 0) {
	var $content = $('<table class="lol">'
					 + (ACCOUNT_TYPE == '71' ?
					 '<tr>'
					   + '<td>'+ (lang=='1'?'Tipo de Persona':'Person type') + '</td>' 
					   + '<td>'+ (PERSON_TYPE==''?'-':
									 (PERSON_TYPE=='1'?(lang=='1'?'Física':'Individual entity'):
									   (lang=='1'?'Moral':'Legal entity')
									 )
								   )
						+ '</td>' 
					 + '</tr>' 
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Sector econ&oacute;mico':'Economic Sector') +':</td>' 
					   + '<td>'+ (BENEF_NAME_ECOSECTOR==''?'-':BENEF_NAME_ECOSECTOR) +'</td>' 
					 + '</tr>' 
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Importe máximo':'Max. amount') +': </td>' 
					   + '<td>'+ (BANK_MAX_AMOUNT==''?'-':BANK_MAX_AMOUNT) + '</td>' 
					 + '</tr>':
									   (ACCOUNT_TYPE=='72'?
										 '<tr>' 
					   + '<td>'+ (lang=='1'?'Tipo de Pago':'Payment type') +':</td>' 
					   + (ACCOUNT_NUMBER!=''?'<td>SWIFT</td>':'<td>IBAN</td>')
					 + '</tr>' 
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Banco':'Bank') +':</td>' 
					   + '<td>'+ (BANK_MAX_AMOUNT==''?'-':BANK_MAX_AMOUNT) +'</td>' 
					 + '</tr>'
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Pa&iacute;s':'Country') +':</td>' 
					   + '<td>'+ (COUNTRY==''?'-':COUNTRY) +'</td>' 
					 + '</tr>'
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Estado':'Estate') +':</td>' 
					   + '<td>'+ (ESTATE==''?'-':ESTATE) +'</td>' 
					 + '</tr>'
					 + '<tr>' 
					   + '<td>'+ (lang=='1'?'Ciudad':'City') +':</td>' 
					   + '<td>'+ (CITY==''?'-':CITY) +'</td>' 
					 + '</tr>'
					 + '<tr>' 
					   + '<td>'
					   + (lang=='1'?'Importe máximo':'Max. amount') +': </td>' 
					   + '<td>'+ (MAX_AMOUNT==''?'-':MAX_AMOUNT) +'</td>'
					 +'</tr>':
						(ACCOUNT_TYPE=='73'?
												'<tr>'
						  + '<td>'+ (lang=='1'?'Tipo de Pago':'Payment type') +':</td>' 
						  + '<td>Citi NY DDA</td>' 
						+ '</tr>' 
						+ '<tr>'
						  + '<td>'
						  + (lang=='1'?'Importe m�ximo':'Max. amount') +': </td>' 
						  + '<td>'+ (MAX_AMOUNT==''?'-':MAX_AMOUNT) +'</td>' 
						+ '</tr>':
						  '<tr>' 
						  + '<td>'+ (lang=='1'?'Importe maximo':'Max. amount') +': </td>' 
						  + '<td>'+ (BANK_MAX_AMOUNT==''?'-':BANK_MAX_AMOUNT) +'</td>' 
						+ '</tr>')))
						+ '<tr>' 
						  + '<td>'+ (lang=='1'?'Per&iacute;odo':'Period') +':</td>'
						  + '<td class="borderBDotted">'+ (PERIOD==''?'-':PERIOD) +'</td>' 
						+ '</tr>'	
						+ (ACCOUNT_TYPE=='72'||ACCOUNT_TYPE=='73'?	
												  '<tr>' 
						  + '<td>'+ (lang=='1'?'Sector econ&oacute;mico':'Economic Sector') +':</td>'
						  + '<td>'+ (ECONOMIC_SECTOR==''?'-':ECONOMIC_SECTOR) +'</td>'
						+ '</tr>' : '')
					 
						+ (ACCOUNT_TYPE=='72'||ACCOUNT_TYPE=='73'?	
												  '<tr>' 
						  + '<td>'+ (lang=='1'?'RFC / CURP':'RFC / CURP') +':</td>'
						  + '<td>'+ (RFC_CURP==''?'-':RFC_CURP) +'</td>'
						+ '</tr>' : '')
					 +'</table>'
					 
					)
	console.log('entro')
	$('.algo').after($content)
	} else {
	  console.log('salio')
	  $('.algo').next().toggle()
	}
  }
  
  /** /
	Manipulating an object
  /**/
  var $btnDoYourThing = $('.btn')
  $btnDoYourThing.css('color', 'white')
  $btnDoYourThing.css({'backgroundColor': 'green', 'boxShadow': '0px 0px 10px red'})