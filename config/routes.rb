Rails.application.routes.draw do
  namespace :admin do
    resources :products
    resources :orders do
      member do
        post :cancel
        post :ship
        post :shipped
        post :return
      end
    end
  end

  devise_for :users


  #root 'products#index'
  root 'welcome#index'

  resources :products do
    member do
      post :add_to_cart
      post :like
      post :unlike
    end
    collection do
      get :search
    end
    collection do
      get :wine
      get :spirit
      get :brandy
    end
  end

  resources :carts do
    collection do
      delete :clean
      post :checkout
    end
  end
  resources :cart_items
  resources :orders do
    member do
      post :pay_with_alipay
      post :pay_with_wechat
      post :apply_to_cancel
    end
  end

  namespace :account do
    resources :orders
    resources :favorites
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
