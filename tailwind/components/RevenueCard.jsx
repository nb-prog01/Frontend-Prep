export const RevenueCard=({
    title,
    showWarning,
    orderCount,
    amount
})=>{
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray-500">
            {title}
            ?    
        </div>
        <div className="flex justify-between">
            <div>
                $ {amount}
            </div>
            {orderCount?
            <div  className="flex">
                <div className="text-blue-600">
                {orderCount} order(s)
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                
            </div>:null}
        </div>
    </div>
}