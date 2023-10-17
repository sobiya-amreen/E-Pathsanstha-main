import React, { useState } from 'react'

const TerijPatrakModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div  open={isModalVisible}
    onClose={() => {
      setIsModalVisible(false);
    }} >
       <div   
                         
                         className="modal fade in modalStyle" id="defaultModal" tabindex="-1" role="dialog" >
               <div className="modal-dialog" role="document">
                   <div className="modal-content">
                       <div className="modal-header">
                           <h4 className="modal-title" id="defaultModalLabel">Modal title</h4>
                       </div>
                       <div className="modal-body">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan
                           vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper.
                           Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus
                           nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla.
                           Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.
                       </div>
                       <div className="modal-footer">
                           <button type="button" className="btn btn-link waves-effect">SAVE CHANGES</button>
                           <button type="button" className="btn btn-link waves-effect" data-dismiss="modal">CLOSE</button>
                       </div>
                   </div>
               </div>
           </div> 
           <Terij_patrak 
           setIsModalVisible={setIsModalVisible}
           />
    </div>
  )
}

export default TerijPatrakModal
