// HomeScreen.kt — sample screen in the Jupiter Admin Kit skill
package com.jupiterdesign.ui.theme

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.Image
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.painterResource
import com.jupiterdesign.ui.theme.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen() {
    Scaffold(
        // The brand logo leads every screen: import the skill's logo SVG as res/drawable/brand_logo.xml (Vector Asset)
        topBar = { TopAppBar(title = { Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) { Image(painterResource(R.drawable.brand_logo), contentDescription = "Jupiter Admin Kit", modifier = Modifier.height(24.dp)); Text("Jupiter Admin Kit") } }) },
        floatingActionButton = { ExtendedFloatingActionButton(onClick = {}, containerColor = MaterialTheme.colorScheme.primary) { Text("Open the kit") } },
        bottomBar = {
            NavigationBar {
                NavigationBarItem(selected = true, onClick = {}, icon = {}, label = { Text("Home") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Search") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Inbox") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Profile") })
            }
        }
    ) { padding ->
        Column(Modifier.padding(padding).padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text("Operations", style = MaterialTheme.typography.labelSmall)
            Text("Every admin screen, one calm kit.", style = MaterialTheme.typography.headlineMedium)
            Text("36 ready templates — overviews, tables, boards, records, forms and account pages — in the same shell, filters and numbers.", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature one", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature two", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
        }
    }
}
