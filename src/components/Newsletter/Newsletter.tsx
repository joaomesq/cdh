import React, {useDebugValue, useState} from 'react';

interface NewsletterProps{
    email: string;
}

export default function Newsletter({email}: NewsletterProps){
    return (
        <div className='bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full text-center'>
            <div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>Assine nossa Newsletter</h3>
                <p className='text-gray-600 mb-6'>Receba novidades, dicas e conteúdos exclusivos no seu e-mail.</p>
            </div>

            <div>
                <form action={`https://formsubmit.co/${email}`} method='POST' className='flex flex-col sm:flex-row items-center gap-2'>
                    <input type='email' name='email' placeholder='Digite o seu e-mail' required className='flex-1 px-4 py-2 border rounded-lg focus:ring-2 foucs:ring-blue-500 focus:outline_none w-full'/>
                    <button type='submit' className='bg-cdh-blue text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto'>Inscrever-se</button>
                </form>

                <p className='text-xs text-gray-500 mt-4'>Prometemos não enviar spam!</p>
            </div>
        </div>
    );
}
