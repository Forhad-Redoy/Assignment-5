
 let points = 100;
 let callHistory = [];
 let count = 0;

//    function for getElementById 
    function getElement(id){
       const element = document.getElementById(id)
        return element;
    }
 

        //function for Heart Icon Count

        const buttons = document.querySelectorAll('.heartIcon');
        
        const countDisplay = getElement('totalHeart')

        for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        count++;
        countDisplay.innerText = count;
      });
    }

    // function for copy button
   const countSpan = document.querySelector(".copyCount");
    document.querySelector

    document.addEventListener("click", e => {
      if (e.target.classList.contains("copyBtn")) {
        const text = e.target.parentElement.previousElementSibling.innerText;
       
        

        navigator.clipboard.writeText(text).then(() => {
          count++;
          countSpan.textContent = count;
          alert("Copied: " + text);
        });
      }
    });


 
    //  function for call and call history
        function updatePointsDisplay() {
            getElement('coins').textContent = points;
        }

        function makeCall(name, number) {
            if (points <= 0) {
                alert("Can't make call - insufficient points!");
                return;
            }

            alert("Calling " + name + " at " + number);
            

            points -= 20;
            updatePointsDisplay();
            
            const callTime = new Date().toLocaleTimeString();
            const callRecord = {
                name: name,
                number: number,
                time: callTime
            };
            
            callHistory.push(callRecord);
            updateCallHistory();
        }

        function updateCallHistory() {
            const historyContainer = getElement('callHistory');
            
            if (callHistory.length === 0) {
                historyContainer.innerHTML = '<div class="text-gray-500 text-center py-4"></div>';
                return;
            }
            
            let historyHTML = '';
            for (let i = callHistory.length - 1; i >= 0; i--) {
                const call = callHistory[i];
                historyHTML += `
                    <div class="p-3 mx-2 my-2 bg-gray-100 rounded-lg flex justify-between">
                        <div>
                            
                        <div class="font-medium text-gray-900">${call.name}</div>
                        <div class="text-gray-600 text-sm">${call.number}</div>
                        </div>
                        <div>
                         <div class=" text-xs font-semibold mt-1">${call.time}</div>
                        </div>
                    </div>
                `;
            }
            
            historyContainer.innerHTML = historyHTML;
        }

        function clearHistory() {
            if (callHistory.length === 0) {
                alert("No history to clear!");
                return;
            }
            
            if (confirm("Are you sure you want to clear all call history?")) {
                callHistory = [];
                updateCallHistory();
                alert("Call history cleared!");
            }
        }

        document.addEventListener('DOMContentLoaded', function() {

            const callButtons = document.getElementsByClassName('callBtn');
            for (let i = 0; i < callButtons.length; i++) {
                callButtons[i].addEventListener('click', function() {
                    const name = this.getAttribute('data-name');
                    const number = this.getAttribute('data-number');
                    makeCall(name, number);
                });
            }

            getElement('clearHistory').addEventListener('click', clearHistory);
        });

        updatePointsDisplay();
     
