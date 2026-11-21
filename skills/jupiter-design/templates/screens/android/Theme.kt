// Theme.kt — Material 3 theme mapped to the Jupiter Admin Kit tokens
package com.jupiterdesign.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.Typography
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

private val LightColors = lightColorScheme(
    primary = BrandButton, onPrimary = BrandOnButton,
    secondary = BrandAccent, onSecondary = BrandOnAccent,
    tertiary = BrandAccent,
    background = BrandBackground, onBackground = BrandInk,
    surface = BrandSurface, onSurface = BrandInk,
    surfaceVariant = BrandBand, onSurfaceVariant = BrandInk2,
    outline = BrandLine, error = BrandError,
)

// Register the font files under res/font and swap FontFamily.Default for FontFamily(Font(R.font.xxx))
val DisplayFamily = FontFamily.Default   // Public Sans
val BodyFamily = FontFamily.Default      // Public Sans
val MonoFamily = FontFamily.Monospace    // JetBrains Mono

val JupiterAdminKitTypography = Typography(
    displayLarge = TextStyle(fontFamily = DisplayFamily, fontWeight = FontWeight.W600, fontSize = 44.sp, lineHeight = 48.sp, letterSpacing = (-0.9).sp),
    headlineMedium = TextStyle(fontFamily = DisplayFamily, fontWeight = FontWeight.W600, fontSize = 28.sp, lineHeight = 32.sp),
    titleMedium = TextStyle(fontFamily = BodyFamily, fontWeight = FontWeight.Medium, fontSize = 16.sp),
    bodyLarge = TextStyle(fontFamily = BodyFamily, fontSize = 16.sp, lineHeight = 24.sp),
    labelSmall = TextStyle(fontFamily = MonoFamily, fontSize = 11.sp, letterSpacing = 0.8.sp),
)

val JupiterAdminKitShapes = Shapes(
    small = RoundedCornerShape(3.dp),
    medium = RoundedCornerShape(6.dp),
    large = RoundedCornerShape(12.dp),
)

@Composable
fun JupiterAdminKitTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = LightColors, typography = JupiterAdminKitTypography, shapes = JupiterAdminKitShapes, content = content)
}
