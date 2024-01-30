import React from 'react'
import Index from './layout'
import TabGenerator from '../../components/TabGenerator'

const ListConsultations = () => {
  return (
    <Index content={
      <>
        <section className="w-full mx-auto my-12 max-w-[800px] bg-white rounded-xl">
            <div className="w-full flex flex-row border-b border-gray-200 p-4 px-6 justify-between">
            <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M19.7567 10.4593C19.4443 8.11295 18.2524 5.97288 16.422 4.47205C14.5917 2.97122 12.2595 2.22169 9.8975 2.37512C7.53547 2.52854 5.3199 3.57347 3.69907 5.29847C2.07825 7.02347 1.17318 9.29975 1.16699 11.6668C1.16699 13.8741 1.93349 15.9029 3.21566 17.5013C4.15833 18.6784 4.66699 19.9793 4.66699 21.3571V25.6668H15.167L15.1682 22.1668H17.5003C18.1192 22.1668 18.7127 21.9209 19.1502 21.4833C19.5878 21.0458 19.8337 20.4523 19.8337 19.8334V16.4163L22.1203 15.4363C22.5193 15.2659 22.5543 14.8599 22.3817 14.5881L19.7567 10.4581V10.4593ZM3.50033 11.6668C3.49853 9.88785 4.17409 8.17499 5.38971 6.87623C6.60533 5.57747 8.26983 4.79025 10.045 4.67453C11.8201 4.55881 13.5727 5.12328 14.9467 6.25323C16.3206 7.38317 17.2128 8.99384 17.442 10.7579L17.5085 11.2736L19.3087 14.1028L17.5003 14.8774V19.8334H12.836L12.8337 23.3334H7.00033V21.3571C7.00033 19.4449 6.31083 17.6331 5.03449 16.0418C4.03817 14.8016 3.49673 13.2576 3.50033 11.6668ZM24.68 21.1191L22.7375 19.8241C23.8897 18.1005 24.5033 16.0733 24.5003 14.0001C24.504 11.9266 23.8907 9.89889 22.7387 8.17492L24.68 6.87992C26.0884 8.98706 26.8381 11.4656 26.8337 14.0001C26.8337 16.6344 26.0403 19.0821 24.68 21.1191Z" fill="black"/>
                </svg>
                <p className='text-[18px]'>لیست مشاوره ها</p>
              </div>
              <div></div>
            </div>
            <div className="w-full inline-flex flex-col justify-center items-center gap-4 pt-3 pb-6 px-6">
              <div className="w-full">
                <TabGenerator items={[
                  {title:'همه'},
                  {title:'مشاوره تحصیلی'},
                  {title:'مشاوره نظام وظیفه'},
                  {title:'مشاوره کاری'},
                  {title:'مشاوره آوسبیلدونگ'},
                ]}/>
              </div>
              <div className="w-full border border-gray-200  rounded-lg overflow-hidden">
                <div className="w-full flex bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">نوع مشاوره</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">تاریخ و ساعت</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">مصاحبه گر</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] font-bold">وضعیت</span>
                </div>
                <div className="w-full flex bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">جلسه بعد</span>
                </div>
                <div className="w-full flex bg-gray-50">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-red-500">جلسه بعد</span>
                </div>
                <div className="w-full flex bg-white">
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">مشاوره تحصیلی</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">۱۳:۲۱ - ۱۳۰۱/۰۱/۰۲۱</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px]">سینا شاطریان</span>
                  <span className="w-1/4 text-center py-5 px-4 text-[14px] text-green-500">جلسه بعد</span>
                </div>
              </div>
            </div>
          </section>
        
      </>
    } />
  )
}

export default ListConsultations