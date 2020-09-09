import React,{useState} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
function EditModal({todo,edited}){
   const[editText,setEditText]=useState(todo.task)
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
   
   
    function closeModal(){
      setIsOpen(false);
    }

const handleEdit=()=>{
    edited(todo.id,editText)
    setIsOpen(!modalIsOpen)
}


    return (
        <div>
            <i onClick={openModal} class="fas fa-edit"></i>
         
          <Modal
            isOpen={modalIsOpen}
           
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
           
            
            
            <form onSubmit={(e)=>e.preventDefault() }>
            
              <input    type='text' value={editText} onChange={(e)=> setEditText(e.target.value)}/>
              <button onClick={handleEdit}>save</button>
              <button onClick={closeModal}>close</button>
             
          </form>
        </Modal>
      </div>
    );
}
export default EditModal;