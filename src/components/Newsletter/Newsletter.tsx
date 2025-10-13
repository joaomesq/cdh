import React, {useDebugValue, useState} from 'react';

interface NewsletterProps{
    email: string;
}

export default function Newsletter({email}: NewsletterProps){
    return (
        <div className='bg-cdh-blue p-8 py-12 w-full text-center'>
            <div className='md:w-1/2 md:mx-auto'>
                <h3 className='text-3xl font-bold mb-4 text-white'>Assine nossa Newsletter</h3>
                <p className='mb-6 text-gray-300 text-lg'>Receba novidades, dicas e conteúdos exclusivos no seu e-mail.</p>
            </div>

            <div className="mt-12">
                <form action={`https://formsubmit.co/${email}`} method='POST' className='flex flex-col sm:flex-row items-center gap-2'>
                    <input type='email' name='email' placeholder='Digite o seu e-mail' required className='flex-1 px-2 py-3 border rounded-lg w-full'/>
                    <button type='submit' className='bg-cdh-orange mt-2 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto'>Inscrever-se</button>
                    
                    {/**Mensagem de sucesso */}
                    <input type="hidden" name="_subject" value="Obrigado por entrar em contato!"/>
                    {/**Rediredcionamento */}
                    <input type="hideen" name="_next" value="https://cdh-psi.vercel.app"/>
                </form>

                <p className='text-xs mt-4 text-gray-300'>Prometemos não enviar spam!</p>
            </div>
        </div>
    );
}
