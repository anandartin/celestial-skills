// HomeScreen.kt — sample screen in the Mercury skill
package com.mercurydesign.ui.theme

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.Image
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.painterResource
import com.mercurydesign.ui.theme.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen() {
    Scaffold(
        // The brand logo leads every screen: import the skill's logo SVG as res/drawable/brand_logo.xml (Vector Asset)
        topBar = { TopAppBar(title = { Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) { Image(painterResource(R.drawable.brand_logo), contentDescription = "Mercury", modifier = Modifier.height(24.dp)); Text("Mercury") } }) },
        floatingActionButton = { ExtendedFloatingActionButton(onClick = {}, containerColor = MaterialTheme.colorScheme.primary) { Text("Build an agent") } },
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
            Text("Agents", style = MaterialTheme.typography.labelSmall)
            Text("Agents you can watch and approve.", style = MaterialTheme.typography.headlineMedium)
            Text("Set up an agent, see every step it takes, and approve anything that matters before it happens.", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature one", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature two", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
        }
    }
}
