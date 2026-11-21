// Theme.kt — Material 3 theme mapped to the Mercury tokens
package com.mercurydesign.ui.theme

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
val DisplayFamily = FontFamily.Default   // Manrope
val BodyFamily = FontFamily.Default      // Manrope
val MonoFamily = FontFamily.Monospace    // DM Mono

val MercuryTypography = Typography(
    displayLarge = TextStyle(fontFamily = DisplayFamily, fontWeight = FontWeight.W700, fontSize = 44.sp, lineHeight = 48.sp, letterSpacing = (-0.9).sp),
    headlineMedium = TextStyle(fontFamily = DisplayFamily, fontWeight = FontWeight.W700, fontSize = 28.sp, lineHeight = 32.sp),
    titleMedium = TextStyle(fontFamily = BodyFamily, fontWeight = FontWeight.Medium, fontSize = 16.sp),
    bodyLarge = TextStyle(fontFamily = BodyFamily, fontSize = 16.sp, lineHeight = 24.sp),
    labelSmall = TextStyle(fontFamily = MonoFamily, fontSize = 11.sp, letterSpacing = 0.8.sp),
)

val MercuryShapes = Shapes(
    small = RoundedCornerShape(4.dp),
    medium = RoundedCornerShape(8.dp),
    large = RoundedCornerShape(16.dp),
)

@Composable
fun MercuryTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = LightColors, typography = MercuryTypography, shapes = MercuryShapes, content = content)
}
