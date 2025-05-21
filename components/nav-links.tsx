'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export function NavLinks() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Link href="/pesquisa" className="text-gray-600 hover:text-blue-600">
          Pesquisar
        </Link>
        <Link href="/cursos" className="text-gray-600 hover:text-blue-600">
          Cursos
        </Link>
        <button
          onClick={() => signOut()}
          className="text-gray-600 hover:text-blue-600"
        >
          Sair
        </button>
      </>
    );
  }

  return (
    <Link href="/auth/signin" className="text-gray-600 hover:text-blue-600">
      Login
    </Link>
  );
} 