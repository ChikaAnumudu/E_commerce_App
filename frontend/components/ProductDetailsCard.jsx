import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'
import Rating from './Rating.jsx'
import { Colors } from '../constants/Utils'
import Product from './Product.jsx'

const ProductDetailsCard = ({ product, qty, setQty, handleAddToCart, disableAddToCart }) => {
    if(!product) return;

  return (
    <View>
      <Text style={styles.productName}>{Product.name}</Text>
      <View style={styles.ratingPriceRow}>
        <Text style={styles.productValue}> ${product.price.toFixed(2)} </Text>
        <Rating rating={Product.rating} text={`${product.numReviews}`} />
      </View>
      <View style={styles.divider} />
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.statusQuantityCart}>
        <View style={styles.statusContainer}>
            <Text style={styles.label}>Status</Text>
            <Text style={[styles.statusText, product.countInStock > 0 ? styles.inStock : styles.outOfStock,]}>{product.countInStock > 0 ? "In stock" : "Out of stock"}</Text>
        </View>

        {
            product.countInStock > 0 && (
                <View style={styles.quantityContainer}>
                    <Text style={styles.label}>Quantity:</Text>
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={qty}
                            onValueChange={(itemValue) => setQty(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            {
                                [...Array(product.countInStock).keys()].map((x)=>(
                                    <Picker.Item 
                                        key={x + 1}
                                        label={(x + 1).toString()}
                                        value={x + 1}
                                        color={Colors.darkGray}
                                    />
                                ))
                            }
                        </Picker>
                    </View>
                </View>
            )
        }

        <TouchableOpacity style={[styles.addToCartButton, disableAddToCart && styles.disableAddToCart]} onPress={handleAddToCart} disabled={disableAddToCart}>
            <Ionicons name="cart-outline" size={20} color={Colors.white} />
            <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  )
}

export default ProductDetailsCard;

const styles = StyleSheet.create({
    detailsCard: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 2,
    },

    productName: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 12, 
        textAlign: "center" 
    },
    productValue: { 
        fontSize: 18, 
        fontWeight: "bold",
        color: 'green' 
    },
    ratingPriceRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: 18
    },
    priceValue: {
        fontSize: 18,
    },
    divider: { 
        height: 1.5, 
        backgroundColor: '#eee', 
        marginVertical: 15 
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20
    },
    statusQuantityCart: {
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: Colors.lightGray,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15, 
        justifyContent: "space-between"
    },
    label: {
        fontSize: 16,
        fontWeight: "600"
    },
    statusText: {
        fontSize : 16,
        fontWeight: "600"
    },
    inStock:{
        color: Colors.success
    },
    outOfStock:{
        color : Colors.danger,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        justifyContent: "space-between",
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: Colors.white,
        width: "50%"
    },
    picker: {
        height: 60,
    },
    pickerItem: {
        fontSize: 16,
    },
    addToCartButton: {
        flexDirection: "row",
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        evevation: 2,
    },
    addToCartText: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 15
    }
    // ... add the rest of your styles
})