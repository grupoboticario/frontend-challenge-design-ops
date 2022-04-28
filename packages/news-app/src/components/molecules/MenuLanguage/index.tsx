import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { LanguageItem, LanguagesContainer } from './style';

function MenuLanguage() {
  const { theme, setTheme } = useTheme();
  return (
    <LanguagesContainer>
      {theme !== 'pt-BR' && (
        <LanguageItem onClick={() => setTheme('pt-BR')}>
          <Image src="/svgs/br.svg" alt="Português do Brasil" width={40} height={28} />
        </LanguageItem>
      )}
      {theme !== 'pt-PT' && (
        <LanguageItem onClick={() => setTheme('pt-PT')}>
          <Image src="/svgs/pt.svg" alt="Português de Portugal" width={40} height={28} />
        </LanguageItem>
      )}
      {theme !== 'en-US' && (
        <LanguageItem onClick={() => setTheme('en-US')}>
          <Image src="/svgs/us.svg" alt="Inglês Americano" width={40} height={28} />
        </LanguageItem>
      )}
    </LanguagesContainer>
  );
}
export default MenuLanguage;
