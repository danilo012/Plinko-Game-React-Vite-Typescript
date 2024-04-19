import { GoogleLogo } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store/auth' 


type LocationState = {
  from?: string
}

export function LoginPage() {
  const location = useLocation()
  const state = location.state as LocationState
  const navigate = useNavigate()
  const signIn = useAuthStore(state => state.signIn)
  const isAuth = useAuthStore(state => state.isAuth)

  
  useEffect(() => {
    if (state && state.from && isAuth) {
      navigate(state.from)
    }
  }, [isAuth])

  async function handleSignIn() {
    await signIn()
    navigate('/')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-2">
      <span className="text-center text-2xl font-bold text-text">
       Log in to show your score to other players..
      </span>
      <button
        onClick={handleSignIn}
        className="flex items-center gap-2 rounded-md bg-red-500 px-6 py-4 font-bold text-text shadow-sm transition-colors hover:bg-red-700"
      >
        <GoogleLogo size="20" weight="fill" />
        Login with Google
      </button>
    </div>
  )
}

const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        network: network,
        clientId: WEB3AUTH_CLIENT_ID,
        uxMode: 'redirect',
        redirectUrl: [...],
      },
    });
    web3auth.configureAdapter(openloginAdapter);
    await web3auth.initModal({
      modalConfig: {
        [WALLET_ADAPTERS.WALLET_CONNECT_V2]: {
          label: 'WALLET_CONNECT_V2',
          showOnModal: false,
        },
        [WALLET_ADAPTERS.TORUS_EVM]: {
          label: 'TORUS_EVM',
          showOnModal: false,
        },
        [WALLET_ADAPTERS.OPENLOGIN]: {
          label: 'openlogin',
          loginMethods: {
            phone: DISABLE_SOCIAL_LOGIN_METHOD,
            google: {
              name: 'google login',
              logoDark: 'url to your custom logo which will shown in dark mode',
              showOnModal: true
            },
            facebook: DISABLE_SOCIAL_LOGIN_METHOD,
            reddit: DISABLE_SOCIAL_LOGIN_METHOD,
            discord: DISABLE_SOCIAL_LOGIN_METHOD,
            twitch: DISABLE_SOCIAL_LOGIN_METHOD,
            apple: DISABLE_SOCIAL_LOGIN_METHOD,
            line: DISABLE_SOCIAL_LOGIN_METHOD,
            github: DISABLE_SOCIAL_LOGIN_METHOD,
            kakao: DISABLE_SOCIAL_LOGIN_METHOD,
            linkedin: DISABLE_SOCIAL_LOGIN_METHOD,
            twitter: DISABLE_SOCIAL_LOGIN_METHOD,
            weibo: DISABLE_SOCIAL_LOGIN_METHOD,
            wechat: DISABLE_SOCIAL_LOGIN_METHOD,
          },
          
          // setting it to false will hide all social login methods from modal.
          showOnModal: true,
        },
      },
    });
