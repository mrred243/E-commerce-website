import React, { useState, useEffect } from 'react';

import { Products, Navbar, Cart, Checkout } from './components/index';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#000000',
			dark: '#37474f',
			light: '#fffff',
		},
	},
	typography: {
		fontFamily: ['Lato', 'sans-serif'].join(','),
	},
});

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [order, setOrder] = useState({});
	const [errorMessage, setErrorMessage] = useState('');

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });
		setCart(cart);
	};

	const handleRemoveFromCart = async productId => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};

	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	};

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder,
			);
			setOrder(incomingOrder);
			refreshCart();
		} catch (error) {
			setErrorMessage(error.data.error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div>
					{/* <Navbar totalItems={cart.total_items}  /> */}
					<Switch>
						<Route exact path='/'>
							<Products
								products={products}
								onAddToCart={handleAddToCart}
								totalItems={cart.total_items}
							/>
						</Route>
						<Route exact path='/cart'>
							<Cart
								cart={cart}
								handleUpdateCartQty={handleUpdateCartQty}
								handleRemoveFromCart={handleRemoveFromCart}
								handleEmptyCart={handleEmptyCart}
								totalItems={cart.total_items}
							/>
						</Route>
						<Route exact path='/checkout'>
							<Checkout
								cart={cart}
								order={order}
								onCaptureCheckout={handleCaptureCheckout}
								error={errorMessage}
							/>
						</Route>
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
