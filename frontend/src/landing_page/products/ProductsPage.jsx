import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
	return (
		<>
			<Hero />
			<LeftSection
				imageUrl="media/images/kite.png"
				productName="Kite"
				productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita ad quod asperiores autem? Sint corrupti explicabo modi libero animi itaque ipsum, aut dignissimos, excepturi sapiente praesentium, quaerat reiciendis? Commodi?"
				tryDemo=""
				learnMore=""
				googlePlay=""
				appStore=""
			/>
			<RightSection
				imageUrl="media/images/console.png"
				productName="Console"
				productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita ad quod asperiores autem? Sint corrupti explicabo modi libero animi itaque ipsum, aut dignissimos, excepturi sapiente praesentium, quaerat reiciendis? Commodi?"
				learnMore=""
			/>
			<LeftSection
				imageUrl="media/images/coin.png"
				productName="Coin"
				productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita ad quod asperiores autem? Sint corrupti explicabo modi libero animi itaque ipsum, aut dignissimos, excepturi sapiente praesentium, quaerat reiciendis? Commodi?"
				tryDemo=""
				learnMore=""
				googlePlay=""
				appStore=""
			/>
			<RightSection
				imageUrl="media/images/kiteconnect.png"
				productName="Kite Connect API"
				productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita ad quod asperiores autem? Sint corrupti explicabo modi libero animi itaque ipsum, aut dignissimos, excepturi sapiente praesentium, quaerat reiciendis? Commodi?"
				learnMore=""
			/>
			<LeftSection
				imageUrl="media/images/varsity.png"
				productName="Varsity mobile"
				productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita ad quod asperiores autem? Sint corrupti explicabo modi libero animi itaque ipsum, aut dignissimos, excepturi sapiente praesentium, quaerat reiciendis? Commodi?"
				tryDemo=""
				learnMore=""
				googlePlay=""
				appStore=""
			/>
			<p className="text-center mt-5 mb-5">
				Want to know more about our technology stock? Check out the Zerodha.tech
				blog.
			</p>
			<Universe />
		</>
	);
}

export default ProductsPage;
