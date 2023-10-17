import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Submit } from '../../Service';


const ThirdPartyFormModal = () => {
  const {handleSubmit,register,formState:{errors}}=useForm();
  return (
    <div>
        <i  type="button" className='material-icons delete-icon' data-toggle="modal" data-target="#exampleModal">delete_sweep</i>



{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ADD MEMBER (सदस्य जोडा)</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        



         {/* modal form start */}
         <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="card modalFormCard">
                  <div className="header">
                    <h2>ADD MEMBER (सदस्य जोडा)</h2>
                  </div>
                  <div className="body">
                    <div className="demo-masked-input">
                      <div className="row clearfix">
                      <Form onSubmit={handleSubmit(Submit)}>
                       
                     


                      <div className="col-md-8">
                          <b>Select Party Name</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">event_note</i>
                            </span>
                            <div className="form-line">
                               {/* dropdown form start */}
                               <div className="col-4">
                                        <select id="party_name" name="party_name" className="form-control">
                                        
                                            <option value="सभासद भाग वसूल">सभासद भाग वसूल</option>
                                        
                                            <option value="सभासद ठेव वसूल">सभासद ठेव वसूल</option>
                                        
                                            <option value="आरम्भीय शिल्लक">आरम्भीय शिल्लक</option>
                                        
                                            <option value="सभासद बचत खाते">सभासद बचत खाते</option>
                                        
                                            <option value="सभासद कल्याण निधि">सभासद कल्याण निधि</option>
                                        
                                            <option value="सभासद मुदत ठेव खाते">सभासद मुदत ठेव खाते</option>
                                        
                                            <option value="सभासद नियमित कर्ज़ वसूल">सभासद नियमित कर्ज़ वसूल</option>
                                        
                                            <option value="सभासद अल्प कर्ज़ वसूल">सभासद अल्प कर्ज़ वसूल</option>
                                        
                                            <option value="नियमित कर्ज़ व्याज वसूल">नियमित कर्ज़ व्याज वसूल</option>
                                        
                                            <option value="अल्प कर्ज़ व्याज वसूल">अल्प कर्ज़ व्याज वसूल</option>
                                        
                                            <option value="कर्मचारी व्यवसाय कर खाते">कर्मचारी व्यवसाय कर खाते</option>
                                        
                                            <option value="बॅंक करंट ज़ीरॉक्स">बॅंक करंट ज़ीरॉक्स</option>
                                        
                                            <option value="ज़ीरॉक्स विभाग निव्वल ऩफा">ज़ीरॉक्स विभाग निव्वल ऩफा</option>
                                        
                                            <option value=" ज़ीरॉक्स खर्च"> ज़ीरॉक्स खर्च</option>
                                        
                                            <option value="एम.ज़ी.ब़ी. लोन ">एम.ज़ी.ब़ी. लोन </option>
                                        
                                            <option value="नियमित कर्ज़ व्याज वसूल">नियमित कर्ज़ व्याज वसूल</option>
                                        
                                            <option value="कल्याण निधि व्याज ">कल्याण निधि व्याज </option>
                                        
                                            <option value="डेडस्टॉक खाते">डेडस्टॉक खाते</option>
                                        
                                            <option value="जी.एस.टी. खर्च">जी.एस.टी. खर्च</option>
                                        
                                            <option value=" सत्कार खर्च"> सत्कार खर्च</option>
                                        
                                            <option value="वार्षिक सभा खर्च">वार्षिक सभा खर्च</option>
                                        
                                            <option value="स्टेशनरी खर्च">स्टेशनरी खर्च</option>
                                        
                                            <option value="बॅंक मुदत ठेव">बॅंक मुदत ठेव</option>
                                        
                                            <option value="ऩफा तोटा खाते">ऩफा तोटा खाते</option>
                                        
                                            <option value="बॅंक रिज़र्व फंड व्याज">बॅंक रिज़र्व फंड व्याज</option>
                                        
                                            <option value="कर्मचारी अधिलाभांश">कर्मचारी अधिलाभांश</option>
                                        
                                            <option value="प्रशिक्षण निधि">प्रशिक्षण निधि</option>
                                        
                                            <option value="ठेव व्याज वाटप">ठेव व्याज वाटप</option>
                                        
                                            <option value="बचत ठेव व्याज">बचत ठेव व्याज</option>
                                        
                                            <option value="लाभांश वाटप">लाभांश वाटप</option>
                                        
                                            <option value="ऑडिट फीस">ऑडिट फीस</option>
                                        
                                            <option value="बॅंक कमिशन">बॅंक कमिशन</option>
                                        
                                            <option value="कर्मचारी पगार">कर्मचारी पगार</option>
                                        
                                            <option value="बॅंक मुदत ठेव व्याज">बॅंक मुदत ठेव व्याज</option>
                                        
                                            <option value="बॅंक मुदत ठेव खाते">बॅंक मुदत ठेव खाते</option>
                                        
                                            <option value="संशयित बुडित निधि">संशयित बुडित निधि</option>
                                        
                                            <option value="कर्मचारी अधिलाभांश">कर्मचारी अधिलाभांश</option>
                                        
                                            <option value="लाभांश खाते">लाभांश खाते</option>
                                        
                                            <option value="गंगाजली खाते">गंगाजली खाते</option>
                                        
                                            <option value="अनामत">अनामत</option>
                                        
                                            <option value="गंगाजली बॅंक व्याज">गंगाजली बॅंक व्याज</option>
                                        
                                            <option value="सभासद प्रवेश फीस">सभासद प्रवेश फीस</option>
                                        
                                            <option value="दिवाली अग्रिम">दिवाली अग्रिम</option>
                                        
                                            <option value="देनगी खाते">देनगी खाते</option>
                                        
                                            <option value="बॅंक करंट खाते">बॅंक करंट खाते</option>
                                        
                                            <option value="कर्मचारी व्यवसाय कर खाते">कर्मचारी व्यवसाय कर खाते</option>
                                        
                                            <option value="सभासद कल्याण निधि खाते">सभासद कल्याण निधि खाते</option>
                                        
                                            <option value="नियमित कर्ज़ वाटप">नियमित कर्ज़ वाटप</option>
                                        
                                            <option value="अल्प कर्ज़ वाटप">अल्प कर्ज़ वाटप</option>
                                        
                                            <option value="सभासद भाग खाते">सभासद भाग खाते</option>
                                        
                                            <option value="सभासद ठेव खाते">सभासद ठेव खाते</option>
                                        
                                            <option value="मुदत ठेव खाते ">मुदत ठेव खाते </option>
                                        
                                            <option value="मुदत ठेव व्याज">मुदत ठेव व्याज</option>
                                        
                                            <option value="सभासद बचत ठेव ">सभासद बचत ठेव </option>
                                        
                                            <option value="जी.एस.टी. शुल्क">जी.एस.टी. शुल्क</option>
                                        
                                            <option value="XEROX PROFIT">XEROX PROFIT</option>
                                        
                                            <option value="सभासद रद्द">सभासद रद्द</option>
                                        
                                            <option value="झेरॉक्स मशीन विक्री">झेरॉक्स मशीन विक्री</option>
                                        
                                            <option value="बॅंक कर्ज़ खाते">बॅंक कर्ज़ खाते</option>
                                        
                                            <option value="इनकम टॅक्स रिटर्न">इनकम टॅक्स रिटर्न</option>
                                        
                                            <option value="अनामत जमा">अनामत जमा</option>
                                        
                                            <option value="डिजिटल स्वाक्षरी">डिजिटल स्वाक्षरी</option>
                                        
                                            <option value="इनकम टॅक्स फीस">इनकम टॅक्स फीस</option>
                                        
                                            <option value="इनकम टॅक्स भरणा">इनकम टॅक्स भरणा</option>
                                        
                                            <option value="बॅंक व्याज एम.ज़ी.ब़ी.">बॅंक व्याज एम.ज़ी.ब़ी.</option>
                                        
                                            <option value="जी.एस.टी.व्‍यवस्‍थापन शुल्क">जी.एस.टी.व्‍यवस्‍थापन शुल्क</option>
                                        
                                            <option value="मानधन खर्च">मानधन खर्च</option>
                                        
                                            <option value="बॅंक कर्ज़ एम.ज़ी.ब़ी.">बॅंक कर्ज़ एम.ज़ी.ब़ी.</option>
                                        
                                            <option value="किरकोळ खर्च">किरकोळ खर्च</option>
                                        
                                            <option value="सभासद मुदत ठेव व्याज">सभासद मुदत ठेव व्याज</option>
                                        
                                            <option value="कर्मचारी भ.नि.निधि">कर्मचारी भ.नि.निधि</option>
                                        
                                            <option value="कर्मचारी पगार खाते">कर्मचारी पगार खाते</option>
                                        
                                            <option value="नफा">नफा</option>
                                        
                                            <option value="कर्ज़ व्याज परत">कर्ज़ व्याज परत</option>
                                        
                                            <option value="खर्च खाते">खर्च खाते</option>
                                        
                                            <option value="निवडणूक खर्च">निवडणूक खर्च</option>
                                        
                                            <option value="वार्षिक सभा भत्ता">वार्षिक सभा भत्ता</option>
                                        
                                            <option value="बँक व्याज">बँक व्याज</option>
                                        
                                            <option value="देणगी">देणगी</option>
                                        
                                            <option value="चालु नफा">चालु नफा</option>
                                        
                                            <option value="झेरॉक्स वि.अ">झेरॉक्स वि.अ</option>
                                        
                                            <option value="कर्मचारी व्यवसाय कर">कर्मचारी व्यवसाय कर</option>
                                        
                                            <option value="रिझर्व फंड खाते">रिझर्व फंड खाते</option>
                                        
                                            <option value="झेरॉक्स खर्च खाते">झेरॉक्स खर्च खाते</option>
                                        
                                            <option value="लाभांश खर्च">लाभांश खर्च</option>
                                        
                                            <option value="छपाई व स्टेशनरी">छपाई व स्टेशनरी</option>
                                        
                                            <option value="डेडस्टॉक खर्च">डेडस्टॉक खर्च</option>
                                        
                                            <option value="बँक व्याज खाते">बँक व्याज खाते</option>
                                        
                                            <option value="सभासद ठेव व्याज">सभासद ठेव व्याज</option>
                                        
                                            <option value="झेरॉक्स उत्पन्न खाते">झेरॉक्स उत्पन्न खाते</option>
                                        
                                            <option value="इतर उत्पन्न खाते">इतर उत्पन्न खाते</option>
                                        
                                            <option value="नियमित कर्ज व्याज">नियमित कर्ज व्याज</option>
                                        
                                            <option value="दि.अ.शिल्लक">दि.अ.शिल्लक</option>
                                        
                                            <option value="निवडणूक अनामत">निवडणूक अनामत</option>
                                        
                                            <option value="एमजीबी बँक">एमजीबी बँक</option>
                                        
                                            <option value="एस.बी.आय बँक">एस.बी.आय बँक</option>
                                        
                                            <option value="झेरॉक्स मशीन खरेदी">झेरॉक्स मशीन खरेदी</option>
                                        
                                            <option value="रिज़र्व फंड खाते">रिज़र्व फंड खाते</option>
                                        
                                            <option value="बँक शे. खाते">बँक शे. खाते</option>
                                        
                                            <option value="आकस्मिक कर्ज खाते">आकस्मिक कर्ज खाते</option>
                                        
                                            <option value="नियमित कर्ज खाते">नियमित कर्ज खाते</option>
                                        
                                            <option value="बँक क्लि.कॅश">बँक क्लि.कॅश</option>
                                        
                                            <option value="डेडस्टॉक झिज">डेडस्टॉक झिज</option>
                                        
                                            <option value="झे.खरेदी निधी ">झे.खरेदी निधी </option>
                                        
                                            <option value="क.भ.नि.निधी">क.भ.नि.निधी</option>
                                        
                                            <option value="सभासद मुदत ठेव">सभासद मुदत ठेव</option>
                                        
                                            <option value="कर्ज व्याज वसूल">कर्ज व्याज वसूल</option>
                                        
                                            <option value="झेरॉक्स विभाग निव्वल ऩफा">झेरॉक्स विभाग निव्वल ऩफा</option>
                                        
                                            <option value="सभासद कल्याण निधी">सभासद कल्याण निधी</option>
                                        
                                            <option value="कर्मचारी भविष्य निधि">कर्मचारी भविष्य निधि</option>
                                        
                                            <option value="अनामत खाते">अनामत खाते</option>
                                        
                                            <option value="मृत सभासद">मृत सभासद</option>
                                                
                                        </select>
                                    </div>
                            {/* dropdown form ends */}
                          </div>
                          </div>
                        </div>
                        {/* input */}


                        <div className="col-md-8">
                          <b>Account Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter the number"
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-8">
                          <b>Full Name</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="text"
                                className="form-control date"
                                placeholder="Enter Full Name"
                              />
                            </div>
                          </div>
                        </div>



                        <div className="col-md-8">
                          <b>Amount</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                          <Form.Group className="mb-3" controlId="ThirdPartyAmountField">
                              <Form.Control
                                type="number"
                                className="form-control time24"
                                placeholder="Enter Amount"
                                {...register("amount",{required: "please enter Amount"})}
                              />
                          </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.amount?.message}</p>
                        
                        </div>




                        <div className="col-md-8">
                          <b>Date</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                            <Form.Group className="mb-3" controlId="xeroxAmountField">
                              <Form.Control
                                type="date"
                                className="form-control date"
                                {...register("share",{required: "please enter shares"})}
                              />
                              </Form.Group>
                            </div>
                          </div>
                          <p style={{color:"red"}}>{errors?.share?.message}</p>
                        </div>




                        <div className="col-md-8">
                          <b>Cheque Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Cheque Number"
                              />
                            </div>
                          </div>
                        </div>




                        <div className="col-md-8">
                          <b>Receipt Number</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Receipt Number"
                              />
                            </div>
                          </div>
                        </div>




                    
                        <div className="col-md-8">
                          <b>Transaction</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                           
                            <div className="col-4">
                                        <select id="partyname" name="debitcredit" className="form-control">
           
                                            <option value="debit">Debit</option>
                                             <option value="credit">Credit</option>
                                              
                                              
                                        </select>
                                    </div>
                            
                            </div>
                          </div>
                        </div>





                        <div className="col-md-8">
                          <b>Notes</b>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                              {/* <input
                                type="number"
                                className="form-control date"
                                placeholder="Enter Receipt Number"
                              /> */}
                              <div className="col-8">
                              <textarea className="form-control" id="notes" name="notes" rows="2"  spellCheck="false"></textarea>
                                    </div>
                            </div>
                          </div>
                        </div>
                

                        

                       

                        <Button variant="primary" type="submit" className="btn bg-indigo btn-block btn-lg waves-effect">report</Button>
                        <Button variant="primary" type="button" className="btn bg-indigo btn-block btn-lg waves-effect closeButton" data-dismiss="modal">Close</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       {/* Modal form ends */}


      </div>
    </div>
  </div>
</div>
{/* Modal End */}
    </div>
  )
}

export default ThirdPartyFormModal
